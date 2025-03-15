import { useState, useEffect } from 'react';
import { getUserSchedules } from '../services/scheduleService';
import Button from './Button';

const PastSchedules = ({ userId, onClose }) => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        if (!userId) {
          setError("User not authenticated");
          setLoading(false);
          return;
        }
        
        const userSchedules = await getUserSchedules(userId);
        setSchedules(userSchedules);
        setLoading(false);
      } catch (err) {
        setError("Failed to load schedules. Please try again.");
        setLoading(false);
        console.error("Error fetching schedules:", err);
      }
    };

    fetchSchedules();
  }, [userId]);

  const handleScheduleClick = (schedule) => {
    setSelectedSchedule(schedule);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-n-8 border border-n-6 rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Past Schedules</h2>
        <Button onClick={onClose} className="text-n-1 hover:text-white">
          Close
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center p-4">{error}</div>
      ) : schedules.length === 0 ? (
        <div className="text-center p-8 text-n-3">
          <p>You have not created any schedules yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {selectedSchedule ? (
            <div className="bg-n-7 rounded-lg p-4">
              <div className="flex justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Schedule Details</h3>
                <Button 
                  onClick={() => setSelectedSchedule(null)}
                  className="text-sm"
                >
                  Back to List
                </Button>
              </div>
              <div className="text-n-3 mb-2">
                Created: {formatDate(selectedSchedule.createdAt)}
              </div>
              <div className="bg-n-6 p-4 rounded-lg overflow-auto max-h-[50vh]">
                <pre className="text-n-1 whitespace-pre-wrap">
                  {JSON.stringify(selectedSchedule.scheduleData, null, 2)}
                </pre>
              </div>
            </div>
          ) : (
            schedules.map((schedule) => (
              <div 
                key={schedule.id} 
                className="bg-n-7 rounded-lg p-4 cursor-pointer hover:bg-n-6 transition-colors"
                onClick={() => handleScheduleClick(schedule)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-medium">
                      Schedule {schedule.id.substring(0, 8)}...
                    </h3>
                    <p className="text-n-3 text-sm">
                      Created: {formatDate(schedule.createdAt)}
                    </p>
                  </div>
                  <Button className="text-sm">View</Button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PastSchedules;
