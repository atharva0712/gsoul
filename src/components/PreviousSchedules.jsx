import { useState, useEffect } from "react";
import { getUserSchedules } from "../services/scheduleService";
import { auth } from "../services/firebase";
import { motion } from "framer-motion";

const PreviousSchedules = ({ isOpen, onClose }) => {
  const [schedules, setSchedules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      if (!isOpen || !auth.currentUser) return;
      
      setIsLoading(true);
      try {
        const userSchedules = await getUserSchedules(auth.currentUser.uid);
        setSchedules(userSchedules);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchedules();
  }, [isOpen]);

  if (!isOpen) return null;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-n-8/90 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-n-8 border border-n-6 rounded-3xl p-8 w-11/12 max-w-5xl max-h-[90vh] overflow-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-n-1">Previous Schedules</h3>
          <button 
            className="text-n-1 hover:text-color-1 text-xl"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {isLoading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500 border-r-2 mx-auto"></div>
            <p className="text-n-2 mt-4">Loading your schedules...</p>
          </div>
        ) : schedules.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-n-2">You have not created any schedules yet.</p>
          </div>
        ) : (
          <>
            {selectedSchedule ? (
              <div>
                <button 
                  onClick={() => setSelectedSchedule(null)}
                  className="mb-4 text-blue-400 hover:text-blue-500 flex items-center"
                >
                  ← Back to list
                </button>

                <div className="bg-n-8/90 border border-n-6 rounded-3xl p-6">
                  <div className="mb-4 text-n-2">
                    Created on: {formatDate(selectedSchedule.createdAt)}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl text-purple-500 font-semibold mb-3">Daily Schedule</h4>
                    <div className="space-y-2">
                      {selectedSchedule.scheduleData.dailySchedule.map((activity, index) => (
                        <div key={index} className="flex items-center bg-n-7 p-3 rounded-lg">
                          <span className="text-n-2 w-32">{activity.startTime} - {activity.endTime}</span>
                          <span className="text-n-1 flex-1">{activity.activity}</span>
                          <span className="text-n-2 px-2 py-1 bg-n-6 rounded">{activity.category}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl text-purple-500 font-semibold mb-3">Recommendations</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedSchedule.scheduleData.recommendations.map((rec, index) => (
                        <li key={index} className="text-n-2">{rec.suggestion}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 p-4 bg-n-7 rounded-lg">
                    <h4 className="text-xl text-purple-500 font-semibold mb-3">Summary</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-n-2">Total Work Hours</p>
                        <p className="text-n-1 text-lg">{selectedSchedule.scheduleData.summaryMetrics.totalWorkHours}h</p>
                      </div>
                      <div>
                        <p className="text-n-2">Total Break Time</p>
                        <p className="text-n-1 text-lg">{selectedSchedule.scheduleData.summaryMetrics.totalBreakTime}min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {schedules.map((schedule) => (
                  <button
                    key={schedule.id}
                    onClick={() => setSelectedSchedule(schedule)}
                    className="text-left p-4 bg-n-7 rounded-lg hover:bg-n-6 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-n-1 font-medium">Schedule from {formatDate(schedule.createdAt)}</span>
                      <span className="text-blue-400">View →</span>
                    </div>
                    {schedule.scheduleData.summaryMetrics && (
                      <div className="mt-2 text-n-3 text-sm">
                        Work: {schedule.scheduleData.summaryMetrics.totalWorkHours}h | 
                        Break: {schedule.scheduleData.summaryMetrics.totalBreakTime}min
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default PreviousSchedules;