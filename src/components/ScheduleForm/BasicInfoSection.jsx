const BasicInfoSection = ({ formData, handleChange }) => {
    return (
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
    );
  };
  
  export default BasicInfoSection;
  