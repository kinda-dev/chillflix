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
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
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

    handleDemoLogin(e) {
        e.preventDefault()
        this.state = {
            email: 'the_dude@google.com',
            password: 'qwerty123456'
        };
        const user = Object.assign({}, this.state);
        this.props.login(user).then(() => this.props.history.push('/home'));
    }

    renderErrors() {
        return(
            <ul className="login-errors">
                {this.props.errors.map((error, i) => (
                    <li className="login-errors" key={i}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        return(
            
            <div className="login-outer-wrap">


                <header className="login-header">
                    <div className="login-header-wrapper">
                         <Link to="/" className="login-header-home-link">
                                <img className="login-header-logo" src={window.logoImage} alt="Chillflix"/>
                        </Link>   
                    </div>
                </header>

                <div className="login-sections">

                    <div className="login-body">
                        <div className="login-background"></div>  
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
                                    <div>{this.renderErrors()}</div>
                                </div>
                                <br/>
                                    <button className="login-button" >Sign In</button>
                            </form>
                                <br/>
                            <div className="sing-up-link-login-form">
                                <p className="demo-user-wrap"><button onClick={this.handleDemoLogin} className="demo-user-button">Demo User</button></p>
                                <div className="sign-up-new">New to Chillflix? <Link className="sign-up-link" to="/">Sign up now</Link>.</div>
                                <p className="not-terms-of-use" >This page was made by Fabio. <a className="fabio-link" href="https://en.wikipedia.org/wiki/Fabio" target="_blank">Learn more.</a></p>
                            </div>
                        </div>
                        <div className="center-pixel"></div>
                    </div>

                    <div className="login-footer-wrapper">   
                        <div className="-login-footer-first-child">
                            <div className="login-footer-divider"></div>
                            <footer className="login-footer">
                                <div className="login-footer-top">Work in progress. Developed by Fabio: <a className="fabio-email" href="mailto:maybe.fabio.com">Mail me for information!!</a></div>
                            </footer>
                            <div className="center-pixel"></div>
                        </div>
                    </div> 
                
                </div>

            </div>
        )
    }
}

export default LoginForm;