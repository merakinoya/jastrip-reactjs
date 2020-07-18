import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SwitchRoute from './components/SwitchRoute';
import {
  BrowserRouter as Router
} from "react-router-dom";

class App extends Component {


  render() {
    return (
      <Router>
        <Navbar />
        
        <SwitchRoute />

        <Footer />
      </Router>
    )
  }
}

export default App;

/* Example
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/