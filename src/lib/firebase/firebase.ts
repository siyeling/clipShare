// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_MEASUREMENT_ID, FIREBASE_MESSAGE_SENDER_ID, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BACKET } from "@/constant/env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseUrl:FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BACKET,
  messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initializeFirebaseApp = () => {
    !getApps().length ? initializeApp(firebaseConfig) : getApp();
}

//export const analytics = getAnalytics(app);