import React from 'react';

import { Link, Route } from 'react-router-dom';
import Test from './dummy_auth_test/test_auth_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => {
    debugger
 return(
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Work In Progress</h1>
            </Link>
            <Test />
        </header>
        <Route path="/login" component={LoginFormContainer} />
    </div>
 )
};

export default App;