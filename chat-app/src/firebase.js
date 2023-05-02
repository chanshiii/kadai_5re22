import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB64pRx4-NizCdnNel3pushbse8b4ZN8oc",
  authDomain: "react-chat-app-f8d3e.firebaseapp.com",
  projectId: "react-chat-app-f8d3e",
  storageBucket: "react-chat-app-f8d3e.appspot.com",
  messagingSenderId: "55794716390",
  appId: "1:55794716390:web:4fe19e949484a7ac9e3527",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };