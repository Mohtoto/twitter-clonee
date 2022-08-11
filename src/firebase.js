import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDXwkkacghJJKEku1HykerkrtOtKIxJytM",
    authDomain: "clone-e05e9.firebaseapp.com",
    projectId: "clone-e05e9",
    storageBucket: "clone-e05e9.appspot.com",
    messagingSenderId: "13910001851",
    appId: "1:13910001851:web:7c5729b189b4a04f81819e"

  };
  
  // Initialize Firebase
 

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  

export { db } 