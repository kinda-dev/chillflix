import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import LoginPage from './session_form/login_form_container';
import SignupPage from './session_form/signup_form_container';
import SplashComponent from './splash_page/splash_component';
import HomePage from './home_page/home_page_container';
import PageNotFound from './page_not_found/page_not_found_component';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
 return(
     <div className="body-container">
                <Switch>
                    <AuthRoute exact path="/" component={SplashComponent} />
                    <AuthRoute exact path="/login" component={LoginPage} />
                    <AuthRoute exact path="/signup" component={SignupPage} />
                    <ProtectedRoute exact path="/browse" component={HomePage} />
                    <Route component={PageNotFound} />
                </Switch>
    </div>
 )
};

export default App;