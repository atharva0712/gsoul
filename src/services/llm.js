import { GoogleGenerativeAI } from "@google/generative-ai";
import { generatePrompt } from '../utils/prompt';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL_NAME = "gemini-2.0-flash";
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateSchedule = async (formData) => {
    try {
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const prompt = generatePrompt(formData);
        const result = await model.generateContent(prompt);

        const response = await result.response;
        if (response && response.text) {
            try {
                // Clean the response text by removing markdown code blocks
                let responseText = response.text();
                // Remove any markdown code block delimiters
                responseText = responseText.replace(/```json|```/g, '').trim();
                
                return JSON.parse(responseText);
            } catch (jsonError) {
                console.error("Error parsing JSON:", jsonError);
                throw new Error("Failed to parse JSON: " + jsonError.message);
            }
        } else {
            throw new Error("No text in response.");
        }
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw new Error("Failed to generate schedule: " + error.message);
    }
};