// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCofRNOdv1tuoDv9h0Bm4glSxPyKI0EBz4",
  authDomain: "noteballs-2b15b.firebaseapp.com",
  projectId: "noteballs-2b15b",
  storageBucket: "noteballs-2b15b.appspot.com",
  messagingSenderId: "740186424142",
  appId: "1:740186424142:web:81eaadc907766208a5141f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}