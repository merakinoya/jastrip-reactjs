import React, { } from 'react';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

import UserProfile from './pages/UserProfile';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Login from './pages/Login';


import { AuthProvider } from "./services/auth";
import PrivateRoute from './routes/PrivateRoute';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (

    <AuthProvider>

      <Router>
        <Navbar />

        <Switch>
          <PrivateRoute path="/userprofile" component={UserProfile} />
          <Route path="/products" component={Products} />


          <Route path="/login" component={Login} />
          <Route exact path="/" component={Homepage} />
        </Switch>

        <Footer />
      </Router>

    </AuthProvider>
  )


}

export default App;