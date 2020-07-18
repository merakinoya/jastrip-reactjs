import React, { Component } from 'react';
import brandlogo from '../assets/img/brandlogo.svg';
import '../assets/css/styles.css';
import '../assets/css/custom.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="container py-5 mt-3">
                    <div className="row">
                        <div className="col-12 col-md">

                            <img src={brandlogo} classNameName="mb-2" alt="logo" />
                            <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Cool stuff</a></li>
                                <li><a className="text-muted" href="#">Random feature</a></li>
                                <li><a className="text-muted" href="#">Team feature</a></li>
                                <li><a className="text-muted" href="#">Stuff for developers</a></li>
                                <li><a className="text-muted" href="#">Another one</a></li>
                                <li><a className="text-muted" href="#">Last time</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Resource</a></li>
                                <li><a className="text-muted" href="#">Resource name</a></li>
                                <li><a className="text-muted" href="#">Another resource</a></li>
                                <li><a className="text-muted" href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Business</a></li>
                                <li><a className="text-muted" href="#">Education</a></li>
                                <li><a className="text-muted" href="#">Government</a></li>
                                <li><a className="text-muted" href="#">Gaming</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Team</a></li>
                                <li><a className="text-muted" href="#">Locations</a></li>
                                <li><a className="text-muted" href="#">Privacy</a></li>
                                <li><a className="text-muted" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="custom-footer">
                    <small>&copy; 2017-2020 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></small>
                </div>
            </div>
        )
    }
}
