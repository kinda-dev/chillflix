import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';



class HomeComponent extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='home-outer-wrap'>

                <div className="hero">

                <header className="home-header">
                    <Link to="/home" className="home-header-home-link">
                        <img className="home-header-logo" src={window.logoImage} alt="Chillflix"/>
                    </Link>   
                    <nav className="right-navbar-logged-in">
                        <img className="profile-img" src={window.profileImage} alt="ProfileImg"/>
                        <div className="hover-menu">
                            <Link to="/">
                                <p className="logout-button" onClick={() => logout()}>Log Out</p>
                            </Link>
                        </div>
                    </nav>
                </header>
                <h1>WASSSSUUUUUUUUUUUUPPPPP!!!</h1>

                </div>

            </div>
        )
    }
}

export default HomeComponent;