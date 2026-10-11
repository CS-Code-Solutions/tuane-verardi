import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDGg0sUc7uhq3L0o5rCSdw2VjT8N1VLKWc",
    authDomain: "tuane-verardi.firebaseapp.com",
    projectId: "tuane-verardi",
    storageBucket: "tuane-verardi.firebasestorage.app",
    messagingSenderId: "350386051220",
    appId: "1:350386051220:web:b5f90bbef6012b0bc8bc81"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged };
