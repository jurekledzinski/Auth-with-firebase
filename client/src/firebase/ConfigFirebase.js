import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4MT_hWy1K8YLmwgbrVd0vO-YLK9Zj7WQ",
  authDomain: "test-firebase-661c9.firebaseapp.com",
  projectId: "test-firebase-661c9",
  storageBucket: "test-firebase-661c9.appspot.com",
  messagingSenderId: "1013101179938",
  appId: "1:1013101179938:web:d706e394c5fbe880d6067b",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("User zalogowany", uid);
    console.log(user);
  } else {
    console.log("User wylogowany", user);
  }
});

export {
  auth,
  createUserWithEmailAndPassword,
  db,
  signOut,
  signInWithEmailAndPassword,
};
