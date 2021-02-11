import React from 'react';

import { Link, Route } from 'react-router-dom';
import Test from './dummy_auth_test/test_auth_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => {
 return(
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Work In Progress</h1>
            </Link>
            <Test />
        </header>
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />

        
            {/* <img src={window.logoURL} /> double check*/}

    </div>
 )
};

export default App;