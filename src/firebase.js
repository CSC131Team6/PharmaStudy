// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYT0tVwhyZQ55UgkK4sXF_oW65le5BtAE",
  authDomain: "pharmastudy-d61a4.firebaseapp.com",
  projectId: "pharmastudy-d61a4",
  storageBucket: "pharmastudy-d61a4.appspot.com",
  messagingSenderId: "558161454608",
  appId: "1:558161454608:web:df1b9489bf219d0de10c95",
  measurementId: "G-5NGHY6SLSW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);