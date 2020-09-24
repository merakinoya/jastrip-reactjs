// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCke8i-8IEnjPpOewrluy3MTTdnqGKSTbo",
    authDomain: "ilham-arl.firebaseapp.com",
    databaseURL: "https://ilham-arl.firebaseio.com",
    projectId: "ilham-arl",
    storageBucket: "ilham-arl.appspot.com",
    messagingSenderId: "1836056471",
    appId: "1:1836056471:web:7c9fbdf7611d27d272ced2",
    measurementId: "G-M0SMCN1BYK"
};


const firebaseServices = firebase.initializeApp(firebaseConfig);
export default firebaseServices;


const settings = {timestampsInSnapshots: true};
export const firebaseFirestore = firebase.firestore().settings(settings);


export const firebaseAuth = firebase.auth;
export const firebaseDatabase = firebase.database();

