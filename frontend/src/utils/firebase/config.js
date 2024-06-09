import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBqQzug5NrcaSVJqlU4GZyQK8Q-YupJGsM",
  authDomain: "snap-scape.firebaseapp.com",
  projectId: "snap-scape",
  storageBucket: "snap-scape.appspot.com",
  messagingSenderId: "141697359724",
  appId: "1:141697359724:web:c848890c3b2a7b1c9c1d49",
  measurementId: "G-7B6SYRBW1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};