import React from 'react';
import { Link } from 'react-router-dom';

const RightNavbar = ({ currentUser, logout }) => {
    const loginOrSignupLinks = () => (
        <nav className="right-navbar-logged-out">
            <Link to="/login"><button className="login-button">Sign In</button></Link>
            {/* break line under here to fix, this should work: &nbsp;or&nbsp; */}
                <br/>
        </nav>
    );

    const sayHi = () => (
        <nav className="right-navbar-logged-in">
            <img className="profileImg" src={window.profileImage} alt="ProfileImg"/>
            <button className="logout-button" onClick={() => logout()}>Log Out</button>
        </nav>
    );

    return currentUser ? sayHi() : loginOrSignupLinks();
};

export default RightNavbar;