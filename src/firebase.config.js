// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU6ZxsEX96CTy9XPYbMj61a20WIOqg7jg",
    authDomain: "maheshb-e27ab.firebaseapp.com",
    projectId: "maheshb-e27ab",
    storageBucket: "maheshb-e27ab.appspot.com",
    messagingSenderId: "1077775206240",
    appId: "1:1077775206240:web:b37838ae8845ddbb794005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
