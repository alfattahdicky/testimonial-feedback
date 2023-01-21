// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getStorage,
  uploadString,
  ref,
  getDownloadURL,
} from "firebase/storage";
import {getDatabase, ref as refDatabase, set} from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "testimonial-project-324fa.firebaseapp.com",
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: "testimonial-project-324fa.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-53FCH2NJN7",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase();

/**
 * @param {string} name
 * @param {string} data
 * @returns Promise
 */
const uploadImage = (name, data) => {
  const storageRef = ref(storage, name);

  return uploadString(storageRef, data, "data_url");
};

const getUrlFromFirebase = (name) => {
  const storageRef = ref(storage, name);

  return getDownloadURL(storageRef);
};

const writeData = (data, name) => {
  return set(refDatabase(db, `testimonials/${name}`), data)
}

export { getUrlFromFirebase, uploadImage, writeData };
