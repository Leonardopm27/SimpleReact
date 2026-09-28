import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXQvW_vNwYgRrQvGRcxX85azivrbChJ7Y",
  authDomain: "somativa2-89649.firebaseapp.com",
  projectId: "somativa2-89649",
  storageBucket: "somativa2-89649.firebasestorage.app",
  messagingSenderId: "579719713180",
  appId: "1:579719713180:web:61ebfe2db4ad2acf9a3859"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);