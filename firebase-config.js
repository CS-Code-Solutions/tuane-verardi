import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCD-gZNaJT4qp4z6n82K5P7WHd3m-Otw",
    authDomain: "tuane-verardi.firebaseapp.com",
    projectId: "tuane-verardi",
    storageBucket: "tuane-verardi.firebasestorage.app",
    messagingSenderId: "100508031130",
    appId: "1:100508031130:web:4b7b9b1ceff062d380c83a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged };
