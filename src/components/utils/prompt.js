export const generatePrompt = (formData) => {
    return `Generate a comprehensive daily schedule template based on the following information:
      
      USER PROFILE:
      - Name: ${formData.name}
      - Working hours: ${formData.startTime} to ${formData.endTime}
      - Working days: ${formData.daysOfWeek.join(', ')}
      - Break duration: ${formData.breakDuration} minutes
      - Focus preference: ${formData.focusPreference}
      - Priority tasks: ${formData.priorityTasks}
      - Special constraints: ${formData.constraints}
      
      CRITICAL: Your entire response must be ONLY a valid JSON object with no markdown formatting, no explanatory text, and ABSOLUTELY NO code block delimiters like \`\`\`json or \`\`\`. Start your response with { and end with } only.
      
      The JSON should follow this exact structure:
      {
        "dailySchedule": [
          {"startTime": "HH:MM", "endTime": "HH:MM", "activity": "description", "category": "work/break/meeting"}
        ],
        "recommendations": [
          {"area": "productivity", "suggestion": "text"}
        ],
        "summaryMetrics": {
          "totalWorkHours": 0,
          "totalBreakTime": 0
        }
      }
      
      Create a single general timetable that can be applied to any working day, optimized based on the user's preferences.`;
  };