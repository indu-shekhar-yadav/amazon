import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDxEYkYT-GSexllb3h76oGpQotcqukiqaQ",
  authDomain: "clone-ba038.firebaseapp.com",
  projectId: "clone-ba038",
  storageBucket: "clone-ba038.appspot.com",
  messagingSenderId: "871722459263",
  appId: "1:871722459263:web:4d1703b5a278a271149f4a",
  measurementId: "G-ENS9PTTF4E"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};