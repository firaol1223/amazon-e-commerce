import firebase from "firebase/compat/app";
//auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1hn9T3Znb57WnV4KPEM46LhATXbQFqt8",
  authDomain: "e-commerce-99ed4.firebaseapp.com",
  projectId: "e-commerce-99ed4",
  storageBucket: "e-commerce-99ed4.appspot.com",
  messagingSenderId: "526214619602",
  appId: "1:526214619602:web:c40741fb360dffe17a280b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()