import React, { Component } from 'react';
import brandlogo from '../assets/img/brandlogo.svg';
import icon_close from '../assets/icon/x.svg';

import firebaseServices from '../services/firebase';

import { Link } from "react-router-dom";



function ProfileUser(props) {

    const PhotoProfilestyle = { 
        backgroundColor: "#999999",
        width: "24px",
        height: "24px"
    };
    
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#dropdown" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={firebaseServices.auth().currentUser.photoURL} alt=" " className="rounded-circle mr-1 mb-1" style={PhotoProfilestyle} />
                <b>
                {firebaseServices.auth().currentUser.displayName}
                </b>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
                <Link to="/userprofile" className="dropdown-item">Profile</Link>
            </div>
        </li>
    );
}

function RegisterButton(props) {
    return (
        <li className="nav-item">
            <Link to="/login" className="btn btn-primary ml-3">Login</Link>
        </li>
    );
}



class Navbar extends Component {
    
    state = {
        isNavCollapse: false
    };

    navToggle = () => {
        this.setState(prevState => ({ isNavCollapse: !prevState.isNavCollapse }));
    };
    

    render() {
        const { isNavCollapse } = this.state;
        
        function LoggedinCheck() {

            const user = firebaseServices.auth().currentUser;
        
            if (user != null) {
              return <ProfileUser />;
            }
            return <RegisterButton />;
          }
        

        return (
            <header>

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
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/products">Products <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/authapp" className="nav-link">Auth App</Link>
                                </li>

                                <li className="nav-item">
                                    <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#staticBackdrop">
                                        Launch demo modal</button>
                                </li>

                                <LoggedinCheck user={false} />
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="modal fade" id="staticBackdrop" data-backdrop="" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Sign In</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><img src={icon_close} alt="close" /></span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="form-group">
                                            <label htmlFor="InputEmail">Email address</label>
                                            <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="InputPassword">Password</label>
                                            <input type="password" className="form-control" id="InputPassword" />
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="RememberMe" />
                                            <label className="form-check-label" htmlFor="RememberMe">Remember Me</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn" data-dismiss="modal">SignUp</button>
                                    <button type="button" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}

export default Navbar
