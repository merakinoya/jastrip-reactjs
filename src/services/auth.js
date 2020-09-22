import React, { useEffect, useState } from 'react';
import firebaseServices from './firebase';



//-------------

export const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser]   = useState(null);
  const [pending, setPending]           = useState(true);

  // Mirip dengan componentDidMount dan componentDidUpdate:
  useEffect(() => { firebaseServices.auth().onAuthStateChanged((user) => { 
      setCurrentUser(user)
      setPending(false)
    });
  }, []); 

  if(pending){
    return <> ⟳ Loading...</>
  }

  return (
    <AuthContext.Provider value={{ currentUser }} >
      {children}
    </AuthContext.Provider>
  );
};