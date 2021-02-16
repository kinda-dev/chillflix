import React from 'react';
import { Link } from 'react-router-dom';




class HomeComponent extends  React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className='home-outer-wrap'>

                <div className="hero">

                <header className="home-header">
                    <Link to="/browse" className="home-header-home-link">
                        <img className="home-header-logo" src={window.logoImage} alt="Chillflix"/>
                    </Link>   
                    <nav className="right-navbar-logged-in">
                        <img className="profile-img" src={window.profileImage} alt="ProfileImg"/>
                        <div className="hover-menu">
                                {/* <div className="logout-button" onClick={() => dispatch(logout())}>Log Out</div> */}
                                <div className="logout-button" onClick={() => dispatch(logout())}>Log Out</div>
                        </div>
                    </nav>
                </header>
                <h1>WORK IN PROGRESS</h1>

                </div>

            </div>
        )
    }
}

export default HomeComponent;