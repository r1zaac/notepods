import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBcIA5RCRQZIYcbOoN5Lai_RinUNrH0gI",
  authDomain: "noteballs-75c41.firebaseapp.com",
  projectId: "noteballs-75c41",
  storageBucket: "noteballs-75c41.appspot.com",
  messagingSenderId: "419239033598",
  appId: "1:419239033598:web:d11dbdae651622a92e83af",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
