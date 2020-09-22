import React, { Component } from 'react';
import brandlogo from '../assets/img/brandlogo.svg';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="container py-5 mt-3">
                    <div className="row">
                        <div className="col-12 col-md">

                            <img src={brandlogo} className="mb-2" alt="logo" />
                            <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Whe we are?</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="/trips">Trips</a></li>
                                <li><a className="text-muted" href="/products">Products</a></li>
                                <li><a className="text-muted" href="/services">Our Services</a></li>
                                <li><a className="text-muted" href="/about">About Us</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Get in touch</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                <li><a className="text-muted" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                <li><a className="text-muted" href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a className="text-muted" href="https://mail.com" target="_blank" rel="noopener noreferrer">Mail</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="custom-footer">
                    <small>&copy; 2017-2020 Company, Inc. &middot; Privacy &middot; Terms</small>
                </div>
            </div>
        )
    }
}
