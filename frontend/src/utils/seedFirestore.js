import { setDoc, doc, addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import {
  profileData,
  aboutData,
  skillsData,
  projectsData,
  experienceData
} from '../mock';

export const seedFirestore = async () => {
  try {
    console.log('Starting Firestore seeding...');

    // Seed Profile Data (combined with about data)
    const profileRef = doc(db, 'profile', 'main');
    await setDoc(profileRef, {
      ...profileData,
      ...aboutData
    });
    console.log('✓ Profile data seeded');

    // Seed Skills Data
    for (let i = 0; i < skillsData.length; i++) {
      const skillRef = collection(db, 'skills');
      await addDoc(skillRef, {
        ...skillsData[i],
        order: i
      });
    }
    console.log('✓ Skills data seeded');

    // Seed Projects Data
    for (const project of projectsData) {
      const projectRef = collection(db, 'projects');
      await addDoc(projectRef, {
        ...project,
        createdAt: new Date()
      });
    }
    console.log('✓ Projects data seeded');

    // Seed Experience Data
    for (const experience of experienceData) {
      const experienceRef = collection(db, 'experience');
      await addDoc(experienceRef, experience);
    }
    console.log('✓ Experience data seeded');

    console.log('Firestore seeding completed successfully!');
    return true;
  } catch (error) {
    console.error('Error seeding Firestore:', error);
    throw error;
  }
};
