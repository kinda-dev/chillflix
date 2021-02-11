import React from 'react';
import { Link } from 'react-router-dom';

const Test = ({ currentUser, logout }) => {
    const loginOrSignupLinks = () => (
        <nav className="session-links">
            <Link to="/login">Login</Link>
            {/* break line under here to fix, this should work: &nbsp;or&nbsp; */}
                <br/>
        </nav>
    );

    const sayHi = () => (
        <div className="welcome-user">
            <h2 className="welcome-user-email">Ciao, {currentUser.email}!</h2>
            <button className="logout-user-button" onClick={() => logout()}>Log Out</button>
        </div>
    );

    return currentUser ? sayHi() : loginOrSignupLinks();
};

export default Test;