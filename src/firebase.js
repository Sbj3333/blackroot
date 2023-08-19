// src/firebase.js
import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBTdfZ2Olqc7jRlRQww5eM4IbE25J3rA6k",
    authDomain: "blackroot-9b128.firebaseapp.com",
    projectId: "blackroot-9b128",
    storageBucket: "blackroot-9b128.appspot.com",
    messagingSenderId: "13459280143",
    appId: "1:13459280143:web:89fd2cb2e61a7ea944ae7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
export default app