import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, Timestamp } from 'firebase/firestore';

export const saveSchedule = async (userId, scheduleData) => {
  try {
    const scheduleRef = await addDoc(collection(db, "schedules"), {
      userId,
      scheduleData,
      createdAt: Timestamp.now()
    });
    return scheduleRef.id;
  } catch (error) {
    console.error("Error saving schedule: ", error);
    throw error;
  }
};

export const getUserSchedules = async (userId) => {
  try {
    const schedulesQuery = query(
      collection(db, "schedules"),
      where("userId", "==", userId)
    );
    
    const querySnapshot = await getDocs(schedulesQuery);
    const schedules = [];
    
    querySnapshot.forEach((doc) => {
      schedules.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate()
      });
    });
    
    schedules.sort((a, b) => b.createdAt - a.createdAt);
    
    return schedules;
  } catch (error) {
    console.error("Error getting user schedules: ", error);
    throw error;
  }
};
