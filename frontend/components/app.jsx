import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import RightNavbar from './header_navbar/right_navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashComponent from './splash_page/splash_component';

import { AuthRoute } from '../util/route_util';

const App = () => {
 return(
     <div className="first-container">
    <div>
        <header className="navbar">
            <Link to="/" className="header-link">
                <img className="logoChillflix" src={window.logoImage} alt="Chillflix"/>
                {/* <h1>Work In Progress</h1> */}
            </Link>
            {/* line below and logic related to fix, will be used in upper corner of navbar */}
            <RightNavbar />
        </header>
                <Switch>
                    <AuthRoute exact path="/" component={SplashComponent} />
                    {/* <AuthRoute exact path="/" component={FirstSplashComponent} /> */}

                    {/* <PreSignupFormContainer /> */}
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                </Switch>
        
            {/* <img src={window.logoURL} /> double check*/}

    </div>
    </div>
 )
};

export default App;