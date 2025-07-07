import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const saveSchedule = async (userId, schedule) => {
  const scheduleData = {
    userId,
    schedule,
    createdAt: new Date().toISOString(),
  };
  
  const docRef = await addDoc(collection(db, "schedules"), scheduleData);
  return docRef.id;
};

export const getUserSchedules = async (userId) => {
  const schedulesRef = collection(db, "schedules");
  const q = query(schedulesRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
