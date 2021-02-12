import React from 'react';
import { Link } from 'react-router-dom';

const RightNavbar = ({ currentUser, logout }) => {
    const loginOrSignupLinks = () => (
        <nav className="session-links">
            <Link to="/login"><button className="login-button">Sign In</button></Link>
            {/* break line under here to fix, this should work: &nbsp;or&nbsp; */}
                <br/>
        </nav>
    );

    const sayHi = () => (
        <div className="welcome-user">
            <h2 className="welcome-user-email">Ciao, {currentUser.email}!</h2>
            <button className="logout-button" onClick={() => logout()}>Log Out</button>
        </div>
    );

    return currentUser ? sayHi() : loginOrSignupLinks();
};

export default RightNavbar;