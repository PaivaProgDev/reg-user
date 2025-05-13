import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1r1wNeK-6eFOZhuZO2YVuJaR9GYwk1DI",
  authDomain: "meu-app-baf66.firebaseapp.com",
  databaseURL: "https://meu-app-baf66-default-rtdb.firebaseio.com",
  projectId: "meu-app-baf66",
  storageBucket: "meu-app-baf66.firebasestorage.app",
  messagingSenderId: "637701187102",
  appId: "1:637701187102:web:60ac931d2a9b950dc2300f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
