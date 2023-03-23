// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfUVr5CQCFl01ik47hVFbUTveGR2nbMZw",
  authDomain: "validate-9b8e3.firebaseapp.com",
  projectId: "validate-9b8e3",
  storageBucket: "validate-9b8e3.appspot.com",
  messagingSenderId: "104478180300",
  appId: "1:104478180300:web:0555b9b91f26973e515369",
  measurementId: "G-27HPC4DLXW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);