import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Test from './dummy_auth_test/test_auth_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PreSignupFormContainer from './session_form/pre_signup_form';
import { AuthRoute } from '../util/route_util';

const App = () => {
 return(
    <div>
        <header className="navbar">
            <Link to="/" className="header-link">
                <img src={window.logoImage} alt="Chillflix"/>
                {/* <h1>Work In Progress</h1> */}
            </Link>
            {/* line below and logic related to fix, will be used in upper corner of navbar */}
            <Test />
        </header>
                <Switch>
                    <AuthRoute exact path="/" component={PreSignupFormContainer} />

                    {/* <PreSignupFormContainer /> */}
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                </Switch>
        
            {/* <img src={window.logoURL} /> double check*/}

    </div>
 )
};

export default App;