// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBovkGC2GNAIBcChSQdaGkLjc9icDCANb8",
  authDomain: "koa-tutors-2751e.firebaseapp.com",
  projectId: "koa-tutors-2751e",
  storageBucket: "koa-tutors-2751e.firebasestorage.app",
  messagingSenderId: "426422439529",
  appId: "1:426422439529:web:3d7178311535d087bd5cf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


