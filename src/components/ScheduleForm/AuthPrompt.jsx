const AuthPrompt = () => {
    return (
      <div className="text-center py-24">
        <h2 className="text-4xl font-bold text-n-1 mb-4">Get Started</h2>
        <p className="text-n-2 mb-8">Login or signup to create your perfect schedule</p>
        <div className="flex gap-4 justify-center">
          <button 
            className="button text-n-1 hover:text-color-1"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default AuthPrompt;
  