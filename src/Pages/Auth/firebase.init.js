import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs2b1zrRXGEcM505CrlO4YbTst1F48oFc",
  authDomain: "car-doctor-a5b4b.firebaseapp.com",
  projectId: "car-doctor-a5b4b",
  storageBucket: "car-doctor-a5b4b.appspot.com",
  messagingSenderId: "1001029384864",
  appId: "1:1001029384864:web:ca1b2a69064c8d9e67e7c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;