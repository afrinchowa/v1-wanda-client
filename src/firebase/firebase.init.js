
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhMRBQn4IMV8bIlza2my-vzn1NUelt-2c",
  authDomain: "wanda-blog.firebaseapp.com",
  projectId: "wanda-blog",
  storageBucket: "wanda-blog.firebasestorage.app",
  messagingSenderId: "1046709666129",
  appId: "1:1046709666129:web:965bfcd188d95891915370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);