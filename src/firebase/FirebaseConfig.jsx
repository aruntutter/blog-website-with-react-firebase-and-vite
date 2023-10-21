// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIWSdM01LCj5ZRWHa7Ermbj6eQTKvFjl8",
  authDomain: "dailyblog-d1e6c.firebaseapp.com",
  projectId: "dailyblog-d1e6c",
  storageBucket: "dailyblog-d1e6c.appspot.com",
  messagingSenderId: "598431029836",
  appId: "1:598431029836:web:945c792722cced999df2e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
