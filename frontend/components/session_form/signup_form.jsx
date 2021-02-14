import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends  React.Component {
    constructor(props) {
        super(props);
        this.state ={
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
        this.props.signup(user).then(() => this.props.history.push('/home'));
    }

    renderErrors() {
        return(
            <ul className="signup-errors">
                {this.props.errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        );
    }

    componentDidMount() {
        this.splashData = JSON.parse(localStorage.getItem('email'));
        
        if (localStorage.getItem('email')) {
            this.setState({
            email: this.splashData.email,
            password: ''
            })
        } else {
            this.setState({
            email: '',
            password: ''
            })
        }
    } 

    render() {
        return(
            <div className="signup-form-container">
                <h2 className="signup-first-sentence">Create a password to start your membership.</h2>
                <h3 className="signup-second-sentence">Last step and you're done! We hate paperwork, too.</h3>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <br/>
                    <input className="signup-input" placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmail} />
                    <br/>
                    <input className="signup-input" placeholder="Add a password" type="password" value={this.state.password} onChange={this.handlePassword}/>
                    <br/>
                    {this.renderErrors()}
                    <br/>
                        <button className="signup-button">Complete Registration</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;