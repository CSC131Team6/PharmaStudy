// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const JHFirebaseConfig = {
  apiKey: "AIzaSyCYT0tVwhyZQ55UgkK4sXF_oW65le5BtAE",
  authDomain: "pharmastudy-d61a4.firebaseapp.com",
  projectId: "pharmastudy-d61a4",
  storageBucket: "pharmastudy-d61a4.appspot.com",
  messagingSenderId: "558161454608",
  appId: "1:558161454608:web:df1b9489bf219d0de10c95",
  measurementId: "G-5NGHY6SLSW",
};

const BavariaFirebaseConfig = {
  apiKey: "AIzaSyCGAJu6AE-dRdfF6kuPpEjF3s58wHudfkg",
  authDomain: "bavaria-489f6.firebaseapp.com",
  projectId: "bavaria-489f6",
  storageBucket: "bavaria-489f6.appspot.com",
  messagingSenderId: "37317126062",
  appId: "1:37317126062:web:86d8c1bbd017bd1a740a3f"
}

const FDAFirebaseConfig = {
  apiKey: "AIzaSyD7a5BsCYDl9h-socshVvu-lVK9M02ox6Q",
  authDomain: "fdaauthentication.firebaseapp.com",
  projectId: "fdaauthentication",
  storageBucket: "fdaauthentication.appspot.com",
  messagingSenderId: "917794242823",
  appId: "1:917794242823:web:6c4c92d129e69bb52b45a2"
}

// Initialize Firebase
const JHConfig = initializeApp(JHFirebaseConfig, 'JHConfig');
const BavariaConfig = initializeApp(BavariaFirebaseConfig, 'BavariaConfig');
const FDAConfig = initializeApp(FDAFirebaseConfig, 'FDAConfig');

//Export Authentication
export const JHAuth = getAuth(JHConfig);
export const BavariaAuth = getAuth(BavariaConfig);
export const FDAAuth = getAuth(FDAConfig);