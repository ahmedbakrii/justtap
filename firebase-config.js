// 1. استدعاء الوظائف الأساسية من مكتبة Firebase (الإصدار 12.13.0)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

// 2. إعدادات مشروعك الحقيقية (Jus-tt-ap)
const firebaseConfig = {
  apiKey: "AIzaSyAfpew-RjS5kUjpRK6SGpkCpetrioLL2oE",
  authDomain: "jus-tt-ap.firebaseapp.com",
  databaseURL: "https://jus-tt-ap-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jus-tt-ap",
  storageBucket: "jus-tt-ap.firebasestorage.app",
  messagingSenderId: "602186980260",
  appId: "1:602186980260:web:940e78a048db2a656a3f31"
};

// 3. تشغيل الـ Firebase في موقعنا
const app = initializeApp(firebaseConfig);

// 4. تصدير الخدمات عشان نستخدمها في باقي الملفات (البواب والدفتر)
export const auth = getAuth(app);
export const db = getFirestore(app);