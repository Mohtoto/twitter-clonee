import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAG9H750nz1cQErLQA0rSTlWhoYW7lQzUc",
  authDomain: "twteer-clone.firebaseapp.com",
  projectId: "twteer-clone",
  storageBucket: "twteer-clone.appspot.com",
  messagingSenderId: "731948797667",
  appId: "1:731948797667:web:923da47ae4c2fcb3f9bfd6",
  measurementId: "G-66LSCN91GF"
};
  // Initialize Firebase
 

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  

export { db } 