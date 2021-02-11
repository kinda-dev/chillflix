import React from 'react';
import { Link } from 'react-router-dom';


class PreSignupForm extends  React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        // this.props.signup(user);
    }

    render() {
        return(
            <div className="form-wrapper">
            <div className="pre-signup-form-container">
                <h2 className="pre-signup-first-sentence">Unlimited movies, TV shows, and more.</h2>
                <h3 className="pre-signup-second-sentence">Watch anywhere. Cancel anytime.</h3>
                <h4 className="pre-signup-third-sentence">Ready to watch? Enter your email to create 
                or restart your membership.</h4>

                <form onSubmit={this.handleSubmit} className="pre-signup-form-box">
                    <br/>
                    <input className="pre-signup-input" placeholder="Email address" type="text" value={this.state.email} onChange={this.handleEmail} />
                    <br/>
                    <Link to="/signup">
                    <button className="pre-signup-button" >Get Started ></button>
                    </Link>
                </form>
            </div>
            </div>
        )
    }
}

export default PreSignupForm;