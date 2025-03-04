import { useState } from "react";
import { motion } from "framer-motion";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would send the data to your backend/LLM
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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
                {/* Basic Info Section */}
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-n-1 border-b border-n-6 pb-2">
                    Basic Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-n-2 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-n-7 border border-n-6 rounded-lg px-4 py-3 text-n-1 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-n-2 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-n-7 border border-n-6 rounded-lg px-4 py-3 text-n-1 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                {/* Schedule Preferences */}
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-n-1 border-b border-n-6 pb-2">
                    Schedule Preferences
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="startTime" className="block text-n-2 mb-2">
                        Daily Start Time
                      </label>
                      <input
                        type="time"
                        id="startTime"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        className="w-full bg-n-7 border border-n-6 rounded-lg px-4 py-3 text-n-1 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="endTime" className="block text-n-2 mb-2">
                        Daily End Time
                      </label>
                      <input
                        type="time"
                        id="endTime"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                        className="w-full bg-n-7 border border-n-6 rounded-lg px-4 py-3 text-n-1 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="breakDuration" className="block text-n-2 mb-2">
                        Break Duration (minutes)
                      </label>
                      <select
                        id="breakDuration"
                        name="breakDuration"
                        value={formData.breakDuration}
                        onChange={handleChange}
                        className="w-full bg-n-7 border border-n-6 rounded-lg px-4 py-3 text-n-1 focus:border-purple-500 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="45">45 minutes</option>
                        <option value="60">60 minutes</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="focusPreference" className="block text-n-2 mb-2">
                        Focus Preference
                      </label>
                      <select
                        id="focusPreference"
                        name="focusPreference"
                        value={formData.focusPreference}
                        onChange={handleChange}
                        className="w-full bg-n-7 border border-n-6 rounded-lg px-4 py-3 text-n-1 focus:border-purple-500 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="morning">Morning Person</option>
                        <option value="afternoon">Afternoon Person</option>
                        <option value="evening">Evening Person</option>
                        <option value="distributed">Evenly Distributed</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Days of the Week */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-n-1 border-b border-n-6 pb-2">
                    Schedule Days
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {daysOfWeek.map((day) => (
                      <label
                        key={day}
                        className={`flex items-center justify-center px-4 py-2 rounded-full border transition-colors cursor-pointer ${
                          formData.daysOfWeek.includes(day)
                            ? "bg-purple-500/20 border-purple-500 text-purple-300"
                            : "border-n-6 text-n-2 hover:border-n-5"
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={day}
                          checked={formData.daysOfWeek.includes(day)}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        {day.substring(0, 3)}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Priority Tasks */}
                <div className="space-y-4">
                  <label htmlFor="priorityTasks" className="block text-n-2 mb-2">
                    Priority Tasks or Activities (separated by commas)
                  </label>
                  <textarea
                    id="priorityTasks"
                    name="priorityTasks"
                    value={formData.priorityTasks}
                    onChange={handleChange}
                    className="w-full bg-n-7 border border-n-6 rounded-lg px-4 py-3 text-n-1 focus:border-purple-500 focus:outline-none transition-colors min-h-24"
                    placeholder="Example: Math class (2 hours), Gym (1 hour), Project meeting (45 minutes)..."
                  ></textarea>
                </div>

                {/* Special Constraints */}
                <div className="space-y-4">
                  <label htmlFor="constraints" className="block text-n-2 mb-2">
                    Special Constraints or Requirements
                  </label>
                  <textarea
                    id="constraints"
                    name="constraints"
                    value={formData.constraints}
                    onChange={handleChange}
                    className="w-full bg-n-7 border border-n-6 rounded-lg px-4 py-3 text-n-1 focus:border-purple-500 focus:outline-none transition-colors min-h-24"
                    placeholder="Example: No meetings after 4pm, Need 2 hour blocks for deep work, Must have lunch at noon..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10">Generate My Schedule</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleForm;