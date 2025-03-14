const ConstraintsSection = ({ formData, handleChange }) => {
    return (
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
    );
  };
  
  export default ConstraintsSection;
  