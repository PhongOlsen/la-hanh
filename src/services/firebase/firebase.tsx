import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyCMBktlQDX6mU5nLXLJkBidmPA-sqXEG0E",
  authDomain: "la-hanh.firebaseapp.com",
  projectId: "la-hanh",
  storageBucket: "la-hanh.appspot.com",
  messagingSenderId: "251203687807",
  appId: "1:251203687807:web:8157fcff219a2ff647764a",
  measurementId: "G-YR537D4Q2Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
export const firestore = firebase.firestore();
