import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDyHnCCv8iIUxzuiOYzNvaUSA12AX7FqgY",
  authDomain: "saveflex-c9ab7.firebaseapp.com",
  projectId: "saveflex-c9ab7",
  storageBucket: "saveflex-c9ab7.appspot.com",
  messagingSenderId: "402494252329",
  appId: "1:402494252329:web:98dd49fb114eb03d974338",
  measurementId: "G-R07631QQ7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;