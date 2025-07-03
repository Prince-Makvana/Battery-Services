import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcFmUW5CZ2HrW_YJmJz1Tr3RmdSIgJgIc",
  authDomain: "battery-services-64dab.firebaseapp.com",
  projectId: "battery-services-64dab",
  storageBucket: "battery-services-64dab.firebasestorage.app",
  messagingSenderId: "1024989914830",
  appId: "1:1024989914830:web:612d0703e84d53ee8c129f"
};


// Intialize Firebae
export const app = initializeApp(firebaseConfig);

// Initalize Firestore

const db = getFirestore(app);

export default db;