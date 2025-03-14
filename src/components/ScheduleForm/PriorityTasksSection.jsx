const PriorityTasksSection = ({ formData, handleChange }) => {
    return (
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
    );
  };
  
  export default PriorityTasksSection;
  