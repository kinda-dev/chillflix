import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import LoginPage from './session_form/login_form_container';
import SignupPage from './session_form/signup_form_container';
import SplashComponent from './splash_page/splash_component';
import HomeComponent from './home_page/home_component'

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
 return(
     <div className="body-container">
                <Switch>
                    <AuthRoute exact path="/" component={SplashComponent} />
                    <AuthRoute exact path="/login" component={LoginPage} />
                    <AuthRoute exact path="/signup" component={SignupPage} />
                    <Route exact path="/home" component={HomeComponent} />
                </Switch>
    </div>
 )
};

export default App;