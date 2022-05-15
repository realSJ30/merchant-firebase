// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHNE-Mh3qEM-YP-6Dcq-KvoUc7IhiHkrs",
  authDomain: "merchant-38bdf.firebaseapp.com",
  projectId: "merchant-38bdf",
  storageBucket: "merchant-38bdf.appspot.com",
  messagingSenderId: "533965476550",
  appId: "1:533965476550:web:3ff786be5baf3eef3ffdc7",
  measurementId: "G-CCYX7F17X0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app);

export default db;
