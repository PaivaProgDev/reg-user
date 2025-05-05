import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyD1r1wNeK-6eFOZhuZO2YVuJaR9GYwk1DI",
  authDomain: "meu-app-baf66.firebaseapp.com",
  databaseURL: "https://meu-app-baf66-default-rtdb.firebaseio.com",
  projectId: "meu-app-baf66",
  storageBucket: "meu-app-baf66.firebasestorage.app",
  messagingSenderId: "637701187102",
  appId: "1:637701187102:web:60ac931d2a9b950dc2300f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
