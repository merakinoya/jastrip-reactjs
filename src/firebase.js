import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();