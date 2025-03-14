const DaysOfWeekSection = ({ formData, handleCheckboxChange }) => {
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
    );
  };
  
  export default DaysOfWeekSection;
  