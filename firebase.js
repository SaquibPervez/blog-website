 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
 import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

 import { doc, setDoc, getFirestore, getDoc,addDoc,collection,getDocs } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCK8mJCjxmNZdXsJlaT8ORWJXpVaOcMi-A",
   authDomain: "saquib-proj1.firebaseapp.com",
   projectId: "saquib-proj1",
   storageBucket: "saquib-proj1.firebasestorage.app",
   messagingSenderId: "221431608106",
   appId: "1:221431608106:web:987a3807e6f4bee69f2453"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig); 

 const auth = getAuth(app);
const db = getFirestore(app);

 export{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    auth,doc, setDoc, getDoc , db , onAuthStateChanged,addDoc,collection,getDocs
 }