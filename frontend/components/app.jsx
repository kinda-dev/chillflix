import React from 'react';

import { Link, Route } from 'react-router-dom';
import Test from './dummy_auth_test/test_auth_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PreSignupFormContainer from './session_form/pre_signup_form';


const App = () => {
 return(
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Work In Progress</h1>
            </Link>
            {/* line below and logic related to fix, will be used in upper corner of navbar */}
            <Test />
        </header>
        <PreSignupFormContainer />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />

        
            {/* <img src={window.logoURL} /> double check*/}

    </div>
 )
};

export default App;