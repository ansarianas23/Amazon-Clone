import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAPAt8G3P4YH47GWAYgQ6EGnhsseTWApJw",
    authDomain: "clone-d00b0.firebaseapp.com",
    projectId: "clone-d00b0",
    storageBucket: "clone-d00b0.appspot.com",
    messagingSenderId: "574365595020",
    appId: "1:574365595020:web:616ea715aebe18174712a9",
    measurementId: "G-ZDYZCVP4XK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};