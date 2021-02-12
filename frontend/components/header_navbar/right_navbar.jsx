import React from 'react';
import { Link } from 'react-router-dom';

const RightNavbar = ({ currentUser, logout }) => {
    const loginLink = () => (
        <nav className="right-navbar-logged-out">
            <Link to="/login"><button className="login-button">Sign In</button></Link>
            {/* break line under here to fix, this should work: &nbsp;or&nbsp; */}
                <br/>
        </nav>
    );

    const rightNav = () => (
        <nav className="right-navbar-logged-in">
            <img className="profileImg" src={window.profileImage} alt="ProfileImg"/>
            <div className="hover-menu">
                <p className="logout-button" onClick={() => logout()}>Log Out</p>
            </div>
        </nav>
    );

    return currentUser ? rightNav() : loginLink();
};

export default RightNavbar;