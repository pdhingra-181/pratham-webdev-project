import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
 apiKey: "AIzaSyD7OcjKWzxmADPb8nWrMPekKO1-l7MnTH8",
  authDomain: "backend-87eb3.firebaseapp.com",
  projectId: "backend-87eb3",
  storageBucket: "backend-87eb3.firebasestorage.app",
  messagingSenderId: "594718047364",
  appId: "1:594718047364:web:d77d7f24f7f5c852ead6d1",
  measurementId: "G-4H6EQMJY4Z",
  databaseURL: "https://backend-87eb3-default-rtdb.firebaseio.com",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const database = getDatabase(app);
export const provider = new GoogleAuthProvider();
auth.languageCode = 'en'
export { app }