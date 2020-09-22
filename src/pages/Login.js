import React, { useCallback, useContext } from 'react';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { withRouter, Redirect } from 'react-router';
import firebaseServices from "../services/firebase";
import { AuthContext } from '../services/auth';

import * as firebase from "firebase/app";



const Login = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebaseServices.auth().signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            }
            catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);


    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className="row justify-content-center">
            <form onSubmit={handleLogin} className="mt-5 container col-4">

                <div className="form-group">
                    <label for="InputEmail">Email address</label>
                    <input type="email" name="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="InputPassword">Password</label>
                    <input type="password" name="password" className="form-control" id="InputPassword" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="RememberMe" />
                    <label className="form-check-label" for="RememberMe">Remember Me</label>
                </div>
                
                 <button type="submit" className="btn btn-primary btn-block">Login</button>

                <hr></hr>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseServices.auth()} className="btn btn-block" />
            </form>
        </div>
    )
}

export default withRouter(Login);


// Configure FirebaseUI.
const uiConfig = {
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
