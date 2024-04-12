// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyD_W70rl-BKCETx9rEQPwM_70Rt0DzWPMY",
  authDomain: "login-9d399.firebaseapp.com",
  projectId: "login-9d399",
  storageBucket: "login-9d399.appspot.com",
  messagingSenderId: "533017542061",
  appId: "1:533017542061:web:70f12d4123673075b7b524",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
