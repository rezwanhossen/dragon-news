// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("inside firebase", import.meta.env.VITE_SOME_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_SOME_KEY,
  authDomain: "dragon-news-auth-c91fa.firebaseapp.com",
  projectId: "dragon-news-auth-c91fa",
  storageBucket: "dragon-news-auth-c91fa.appspot.com",
  messagingSenderId: "1096508893132",
  appId: "1:1096508893132:web:d7324c645b43ed4fc8df69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
