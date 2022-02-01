// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPycFkgMshHFwCcH-hJw4cJYBKfhuBNl4",
  authDomain: "cards-a348d.firebaseapp.com",
  databaseURL: "https://cards-a348d-default-rtdb.firebaseio.com",
  projectId: "cards-a348d",
  storageBucket: "cards-a348d.appspot.com",
  messagingSenderId: "212323544592",
  appId: "1:212323544592:web:4661bd6b0735e0bd1ca495",
  measurementId: "G-SPH5LDQQG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage, analytics, app };
