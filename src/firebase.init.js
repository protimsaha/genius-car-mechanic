// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoHah5gJQCCiFhF6gH4i14IOqpyjtD904",
    authDomain: "genius-car-mechanics-d6b49.firebaseapp.com",
    projectId: "genius-car-mechanics-d6b49",
    storageBucket: "genius-car-mechanics-d6b49.appspot.com",
    messagingSenderId: "269522778135",
    appId: "1:269522778135:web:6dbfa5c490ad0f94d94452"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;