import React from 'react';
import { Link } from 'react-router-dom';

const Test = ({ currentUser, logout }) => {
    const loginOrSignupLinks = () => (
        <nav className="session-links">
            <Link to="/login">Login</Link>
            {/* break line under here to fix */}
                <br/>
            <Link to="/signup">Sign Up</Link>
        </nav>
    );

    const sayHi = () => (
        <div className="welcome-user">
            <h2 className="welcome-user-email">Ciao, {currentUser.email}!</h2>
            <button className="welcome-user-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? sayHi() : loginOrSignupLinks();
};

export default Test;