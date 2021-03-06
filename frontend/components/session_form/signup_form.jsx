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
        this.handleDemoLogin = this.handleDemoLogin.bind(this);

    }

    handleEmail(e) {
        this.props.resetErrors();
        this.setState({email: e.target.value})
    }

    handlePassword(e) {
        this.props.resetErrors();
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user).then(() => this.props.history.push('/browse'));
    }

    handleDemoLogin(e) {
        e.preventDefault()
        this.state = {
            email: 'the_dude@gmail.com',
            password: 'qwerty123456'
        };
        const user = Object.assign({}, this.state);
        this.props.login(user).then(() => this.props.history.push('/browse'));
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

    componentWillUnmount() {
        this.props.resetErrors();
    }

    renderEmailError() {
        if (this.props.errors.includes("Email can't be blank")) {
        return(
                <div className="signup-errors">Email can't be blank</div>
        )} else if (this.props.errors.includes("Email has already been taken")){
            return(
                <div className="signup-errors">Email has already been taken</div>

            )};
    }

    renderPasswordError() {
        if (this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
        return(
                <div className="signup-errors">Password is too short (minimum is 6 characters)</div>
        )};
    }

    render() {
        return(
            <div className="signup-outer-wrap">

                <header className="signup-header">
                    <div className="signup-header-wrapper">
                        <Link to="/" className="signup-header-home-link">
                            <img className="signup-header-logo" src="https://chillflix-seeds.s3-us-west-1.amazonaws.com/misc/chillflix_logo.png" alt="Chillflix"/>
                        </Link>  

                        <Link to="/logIn" className="signup-login-link">Sign In</Link>
                    </div>
                </header>



                    <div className="signup-body">
                        <div className="signup-form-container">

                                <h2 className="signup-first-sentence">STEP 2 OF 2</h2>
                                <h4 className="signup-second-sentence">Create a password to start your membership.</h4>
                                <h4 className="signup-third-sentence">Last step and you're done!</h4>
                                <h4 className="signup-fourth-sentence">We hate paperwork, too.</h4>
                            <form onSubmit={this.handleSubmit} className="signup-form-box">
                                <br/>
                                <div className="signup-input-little-box">
                                    <input className="signup-input-email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmail} />
                                    <div>{this.renderEmailError()}</div>
                                </div>
                                <div className="signup-input-little-box">
                                    <input className="signup-input-password" placeholder="Add a password" type="password" value={this.state.password} onChange={this.handlePassword}/>
                                    <div >{this.renderPasswordError()}</div>
                                </div>
                                <br/>
                                    <button className="signup-button" >Complete Registration</button>
                            </form>
                                <br/>

                        <p className="demo-user-wrap"><button onClick={this.handleDemoLogin} className="demo-user-button">Demo User</button></p>
                        </div>
                        <div className="center-pixel"></div>

                    </div>

                    <div className="signup-footer-wrapper">   
                        <div className="signup-footer-top">Developed by Fabio:
                            <a className="signup-footer-button-wrap" href="https://www.linkedin.com/in/fabio-raffaele-bortone" target="_blank"><i className="fab fa-linkedin signup-footer-link"></i></a>
                            <a className="signup-footer-button-wrap" href="https://github.com/kinda-dev" target="_blank"><i className="fab fa-github signup-footer-link"></i></a>
                            <a className="signup-footer-button-wrap" href="mailto:maybe.fabio@gmail.com" target="_blank"><i className="fas fa-at signup-footer-link"></i></a>
                        </div>
                    </div> 


            </div>
        )
    }
}

export default SignupForm;