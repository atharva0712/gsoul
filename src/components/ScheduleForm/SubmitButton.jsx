const SubmitButton = () => {
    return (
      <div className="pt-4">
        <button
          type="submit"
          className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Generate My Schedule</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </button>
      </div>
    );
  };
  
  export default SubmitButton;
  