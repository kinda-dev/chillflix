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
        this.props.login(user);
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

            <header className="login-header">
                <h1>DUMMY</h1>
            </header>

            <div className="login-form-container">
                    <h2 className="sign-in-letters">Sign In</h2>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <br/>
                    <input className="login-input" placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmail} />
                    <br/>
                    <input className="login-input" placeholder="Password" type="password" value={this.state.password} onChange={this.handlePassword}/>
                    <br/>
                    {this.renderErrors()}
                    <br/>
                    {/* <Link to="/home"> */}
                        <button className="login-button">Sign In</button>
                    {/* </Link> */}
                    <br/>
                    <p className="sign-up-link">New to Chillflix? <Link to="/signup">Sign up now</Link>.</p>
                </form>
            </div>

            <footer>

            </footer>

            </div>
        )
    }
}

export default LoginForm;