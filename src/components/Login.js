import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
    
    return (
        <form>
            <div className="modal-body">
                <div className="container">
                    <div className="form-group">
                        <label for="InputEmail">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword">Password</label>
                        <input type="password" className="form-control" id="InputPassword" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="RememberMe" />
                        <label className="form-check-label" for="RememberMe">Remember Me</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn" data-dismiss="modal">SignUp</button>
                <button type="button" className="btn btn-primary">Login</button>
            </div>
        </form>
    )
}

Login.propTypes = {

}

export default Login
