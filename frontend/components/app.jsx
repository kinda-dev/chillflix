import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import LoginPage from './session_form/login_form_container';
import SignupPage from './session_form/signup_form_container';
import SplashComponent from './splash_page/splash_component';

import { AuthRoute } from '../util/route_util';

const App = () => {
 return(
     <div className="body-container">
    <div>
                <Switch>
                    <AuthRoute exact path="/" component={SplashComponent} />
                    <AuthRoute exact path="/login" component={LoginPage} />
                    <AuthRoute exact path="/signup" component={SignupPage} />
                </Switch>
        
            {/* <img src={window.logoURL} /> double check*/}

    </div>
    </div>
 )
};

export default App;