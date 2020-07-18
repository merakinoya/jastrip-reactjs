import React, { Component } from 'react';
import brandlogo from '../assets/img/brandlogo.svg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Navbar extends Component {

    state = { isNavCollapse: false };
    navToggle = () => {
        this.setState(prevState => ({ isNavCollapse: !prevState.isNavCollapse }));
    };

    render() {
        const { isNavCollapse } = this.state;
        
        return (
                <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white fixed-top shadow-sm">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img src={brandlogo} className="nav-brand-custom" alt="logo" />
                        </Link>
                        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas" onClick={this.navToggle}>
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>

                        <div className={`navbar-collapse ${isNavCollapse ? "offcanvas-collapse open" : "offcanvas-collapse"}`} id="navbarsExampleDefault">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="products.html">Products <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="user-profile.html">Transaction</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="rounded-circle mr-1 mb-1" src="https://source.unsplash.com/b1Hg7QI-zcc/24x24" alt="profile" />
                                        <b>Ilham Arl</b>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                                        <Link to="/userprofile" className="dropdown-item">Profile</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar
