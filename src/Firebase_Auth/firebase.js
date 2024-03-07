// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfFY63d7KMUIhNELzcIts9iTl3Bo-dv5M",
  authDomain: "login-cbbaa.firebaseapp.com",
  projectId: "login-cbbaa",
  storageBucket: "login-cbbaa.appspot.com",
  messagingSenderId: "377447625067",
  appId: "1:377447625067:web:1c9d88eee708e43a61dc2e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;