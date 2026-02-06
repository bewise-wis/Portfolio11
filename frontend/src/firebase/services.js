import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './config';

// Profile Services
export const getProfile = async () => {
  try {
    const docRef = doc(db, 'profile', 'main');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export const updateProfile = async (data) => {
  try {
    const docRef = doc(db, 'profile', 'main');
    await updateDoc(docRef, data);
    return true;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

// Skills Services
export const getSkills = async () => {
  try {
    const skillsRef = collection(db, 'skills');
    const q = query(skillsRef, orderBy('order', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};

export const addSkill = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'skills'), data);
    return docRef.id;
  } catch (error) {
    console.error('Error adding skill:', error);
    throw error;
  }
};

export const updateSkill = async (id, data) => {
  try {
    const docRef = doc(db, 'skills', id);
    await updateDoc(docRef, data);
    return true;
  } catch (error) {
    console.error('Error updating skill:', error);
    throw error;
  }
};

export const deleteSkill = async (id) => {
  try {
    await deleteDoc(doc(db, 'skills', id));
    return true;
  } catch (error) {
    console.error('Error deleting skill:', error);
    throw error;
  }
};

// Projects Services
export const getProjects = async () => {
  try {
    const projectsRef = collection(db, 'projects');
    const q = query(projectsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const addProject = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'projects'), {
      ...data,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
};

export const updateProject = async (id, data) => {
  try {
    const docRef = doc(db, 'projects', id);
    await updateDoc(docRef, data);
    return true;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    await deleteDoc(doc(db, 'projects', id));
    return true;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

// Experience Services
export const getExperience = async () => {
  try {
    const experienceRef = collection(db, 'experience');
    const q = query(experienceRef, orderBy('startDate', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching experience:', error);
    throw error;
  }
};

export const addExperience = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'experience'), data);
    return docRef.id;
  } catch (error) {
    console.error('Error adding experience:', error);
    throw error;
  }
};

export const updateExperience = async (id, data) => {
  try {
    const docRef = doc(db, 'experience', id);
    await updateDoc(docRef, data);
    return true;
  } catch (error) {
    console.error('Error updating experience:', error);
    throw error;
  }
};

export const deleteExperience = async (id) => {
  try {
    await deleteDoc(doc(db, 'experience', id));
    return true;
  } catch (error) {
    console.error('Error deleting experience:', error);
    throw error;
  }
};

// Contact Messages Services
export const submitContactMessage = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'contactMessages'), {
      ...data,
      timestamp: serverTimestamp(),
      read: false
    });
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact message:', error);
    throw error;
  }
};

export const getContactMessages = async () => {
  try {
    const messagesRef = collection(db, 'contactMessages');
    const q = query(messagesRef, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    throw error;
  }
};

export const markMessageAsRead = async (id) => {
  try {
    const docRef = doc(db, 'contactMessages', id);
    await updateDoc(docRef, { read: true });
    return true;
  } catch (error) {
    console.error('Error marking message as read:', error);
    throw error;
  }
};
