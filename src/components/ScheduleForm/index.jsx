import { useState, useEffect } from "react";
import { generateSchedule } from "../../services/llm";
import ScheduleResult from "../ScheduleResult";
import { motion } from "framer-motion";
import { auth } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import AuthPrompt from "./AuthPrompt";
import BasicInfoSection from "./BasicInfoSection";
import SchedulePreferencesSection from "./SchedulePreferencesSection";
import DaysOfWeekSection from "./DaysOfWeekSection";
import PriorityTasksSection from "./PriorityTasksSection";
import ConstraintsSection from "./ConstraintsSection";
import SubmitButton from "./SubmitButton";

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startTime: "08:00",
    endTime: "18:00",
    breakDuration: "30",
    focusPreference: "morning",
    priorityTasks: "",
    daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    constraints: "",
  });
  const [schedule, setSchedule] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (!isAuthenticated) {
    return <AuthPrompt />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        daysOfWeek: [...formData.daysOfWeek, value],
      });
    } else {
      setFormData({
        ...formData,
        daysOfWeek: formData.daysOfWeek.filter((day) => day !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await generateSchedule(formData);
      setSchedule(response);
    } catch (error) {
      console.error("Failed to generate schedule:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="generate" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Generate Your Perfect Schedule
          </h2>
          <p className="text-n-2 text-lg max-w-2xl mx-auto">
            Tell us about your preferences and let our AI create your ideal timetable
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
            {/* Form card */}
            <div className="relative backdrop-blur-sm border border-n-6 rounded-3xl p-8 md:p-10 bg-n-8/90 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <BasicInfoSection formData={formData} handleChange={handleChange} />
                <SchedulePreferencesSection formData={formData} handleChange={handleChange} />
                <DaysOfWeekSection formData={formData} handleCheckboxChange={handleCheckboxChange} />
                <PriorityTasksSection formData={formData} handleChange={handleChange} />
                <ConstraintsSection formData={formData} handleChange={handleChange} />
                <SubmitButton isGenerating={isLoading} />
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <ScheduleResult schedule={schedule} isLoading={isLoading} />
    </section>
  );
};

export default ScheduleForm;
