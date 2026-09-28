import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "algumasenha",
  authDomain: "somativa2-89649.firebaseapp.com",
  projectId: "somativa2-89649",
  storageBucket: "somativa2-89649.firebasestorage.app",
  messagingSenderId: "579719713180",
  appId: "algumasenha"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
