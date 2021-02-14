import React from 'react';
import { Link } from 'react-router-dom';

import { login } from '../../actions/session_actions'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        // this.navigateToHome = this.navigateToHome.bind(this);
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user).then(() => this.props.history.push('/home'));
        // if (user) this.props.history.push('/home');
    }

    renderErrors() {
        return(
            <ul className="login-errors">
                {this.props.errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        return(
            
            <div className="login-page">

                    <div className="login-background"></div>  

                    <header className="login-header">
                         <Link to="/" className="login-header-home-link">
                                <img className="login-header-logo" src={window.logoImage} alt="Chillflix"/>
                        </Link>   
                    </header>

                    <div className="login-body">
                        <div className="login-form-container">
                                <h2 className="sign-in-letters">Sign In</h2>
                            <form onSubmit={this.handleSubmit} className="login-form-box">
                                <br/>
                                <div className="login-input-little-box">
                                    <input className="login-input-email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmail} />
                                </div>
                                <br/>
                                <div className="login-input-little-box">
                                    <input className="login-input-password" placeholder="Password" type="password" value={this.state.password} onChange={this.handlePassword}/>
                                </div>
                                <br/>
                                {this.renderErrors()}
                                <br/>
                                    <button className="login-button" >Sign In</button>
                            </form>
                                <br/>
                            <div className="sing-up-link-login-form">
                                <p className="sign-up-new">New to Chillflix? <Link className="sign-up-link" to="/signup">Sign up now</Link>.</p>
                                <p className="not-terms-of-use" >This page was made by Fabio. <a className="fabio-link" href="https://en.wikipedia.org/wiki/Fabio" target="_blank">Learn more.</a></p>
                            </div>
                        </div>


                    </div>

                    <div className="login-footer-wrapper">   
                        <div className="footer-divider"></div>
                        <footer className="login-footer">
                            <p className="footer-top">MY INFO HERE</p>
                        </footer>
                    </div> 
                   

            </div>
        )
    }
}

export default LoginForm;