const Notification = ({ message, type, onClose }) => {
    return (
      <div className="fixed top-4 right-4 z-50 animate-fade-in">
        <div className={`px-6 py-3 rounded-lg shadow-lg ${
          type === 'success' ? 'bg-color-1' : 'bg-color-3'
        }`}>
          <div className="flex items-center">
            <p className="text-n-1 font-medium">{message}</p>
            <button 
              onClick={onClose}
              className="ml-4 text-n-1 hover:text-n-2"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Notification;
  