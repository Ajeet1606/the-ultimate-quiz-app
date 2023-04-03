import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDu88UdJ6jeKMEr6w8rHSmeK0Lf9UovUsE",
    authDomain: "quiz-c89a4.firebaseapp.com",
    databaseURL: "https://quiz-c89a4-default-rtdb.firebaseio.com",
    projectId: "quiz-c89a4",
    storageBucket: "quiz-c89a4.appspot.com",
    messagingSenderId: "285126217338",
    appId: "1:285126217338:web:fba232150e20ac308ab5c3",
    measurementId: "G-ZKHJPSSQPH"
  };

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export default firebase;
  