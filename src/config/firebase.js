// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC99ywqM5qqJhZoC7QWGPXUvKi-2BZCVB4",
  authDomain: "vite-contacts-322bf.firebaseapp.com",
  projectId: "vite-contacts-322bf",
  storageBucket: "vite-contacts-322bf.appspot.com",
  messagingSenderId: "559709475474",
  appId: "1:559709475474:web:e7bc420fcb86c41e26cc4b"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db=getFirestore(app);
 export {db};