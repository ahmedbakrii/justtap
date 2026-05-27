// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAfpew-RjS5kUjpRK6SGpkCpetrioLL2oE",
  authDomain: "jus-tt-ap.firebaseapp.com",
  databaseURL: "https://jus-tt-ap-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jus-tt-ap",
  storageBucket: "jus-tt-ap.firebasestorage.app",
  messagingSenderId: "602186980260",
  appId: "1:602186980260:web:940e78a048db2a656a3f31"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
