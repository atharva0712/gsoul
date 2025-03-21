import { motion } from "framer-motion";
import { useState } from "react";
import { saveSchedule } from "../services/scheduleService";
import { auth } from "../services/firebase";
import Button from "./Button";

const ScheduleResult = ({ schedule, isLoading }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState({ show: false, success: false, message: '' });

  const handleSaveSchedule = async () => {
    if (!auth.currentUser) {
      setSaveStatus({
        show: true,
        success: false,
        message: 'You must be logged in to save schedules'
      });
      return;
    }

    setIsSaving(true);
    try {
      await saveSchedule(auth.currentUser.uid, schedule);
      setSaveStatus({
        show: true,
        success: true,
        message: 'Schedule saved successfully!'
      });
      setTimeout(() => {
        setSaveStatus({ show: false, success: false, message: '' });
      }, 3000);
    } catch (error) {
      setSaveStatus({
        show: true,
        success: false,
        message: `Failed to save schedule. ${error.message}`
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500 border-r-2 mx-auto"></div>
        <p className="text-n-2 mt-4">Generating your perfect schedule...</p>
      </div>
    );
  }

  if (!schedule || !schedule.dailySchedule) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-n-8/90 border border-n-6 rounded-3xl p-8 mt-10"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-n-1">Your Generated Schedule</h3>
        <Button
          onClick={handleSaveSchedule}
          disabled={isSaving}
          className={isSaving ? "opacity-70 cursor-not-allowed" : ""}
        >
          {isSaving ? "Saving..." : "Save Schedule"}
        </Button>
      </div>
      
      {saveStatus.show && (
        <div className={`p-3 mb-4 rounded ${saveStatus.success ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
          {saveStatus.message}
        </div>
      )}
      
      <div className="mb-6">
        <h4 className="text-xl text-purple-500 font-semibold mb-3">Daily Schedule</h4>
        <div className="space-y-2">
          {schedule.dailySchedule.map((activity, index) => (
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
          {schedule.recommendations.map((rec, index) => (
            <li key={index} className="text-n-2">{rec.suggestion}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 p-4 bg-n-7 rounded-lg">
        <h4 className="text-xl text-purple-500 font-semibold mb-3">Summary</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-n-2">Total Work Hours</p>
            <p className="text-n-1 text-lg">{schedule.summaryMetrics.totalWorkHours}h</p>
          </div>
          <div>
            <p className="text-n-2">Total Break Time</p>
            <p className="text-n-1 text-lg">{schedule.summaryMetrics.totalBreakTime}min</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScheduleResult;