const SchedulePreferencesSection = ({ formData, handleChange }) => {
    return (
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
    );
  };
  
  export default SchedulePreferencesSection;
  