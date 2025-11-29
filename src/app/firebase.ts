import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDuY7nRxVf5UUCyAhKOu_WNm0k96BNfg3Q",
  authDomain: "sneak-peak-a20b8.firebaseapp.com",
  databaseURL: "https://sneak-peak-a20b8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sneak-peak-a20b8",
  storageBucket: "sneak-peak-a20b8.firebasestorage.app",
  messagingSenderId: "1069265582380",
  appId: "1:1069265582380:web:3bf35b2fe55aebf7445489",
  measurementId: "G-368BRXB7G1"
};

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGE_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENTID
// };




const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);