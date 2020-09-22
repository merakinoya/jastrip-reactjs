// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// Configure Firebase.
const config = {
    apiKey: "AIzaSyCke8i-8IEnjPpOewrluy3MTTdnqGKSTbo",
    authDomain: "ilham-arl.firebaseapp.com",
    databaseURL: "https://ilham-arl.firebaseio.com",
    projectId: "ilham-arl",
    storageBucket: "ilham-arl.appspot.com",
    messagingSenderId: "1836056471",
    appId: "1:1836056471:web:7c9fbdf7611d27d272ced2",
    measurementId: "G-M0SMCN1BYK"
};

firebase.initializeApp(config);



export default class AuthApp extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() 
  {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) 
    {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <p>{firebase.auth().currentUser.email}</p>
        <p>{firebase.auth().currentUser.emailVerified}</p>
        <img src={firebase.auth().currentUser.photoURL} />
        
        <a onClick={() => firebase.auth().signOut()} className="btn btn-danger text-white">Sign-out</a>
      </div>
    );
  }
}