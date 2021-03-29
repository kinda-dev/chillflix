import React from 'react';
import { Link, withRouter } from 'react-router-dom';




class NavbarComponent extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarBackground: 'nav-transparent',
            homeLink: (this.props.history.location.pathname === '/browse') ? <div className="same-page">Home</div> : <Link to="/browse" className="home-header-mylist-link">Home</Link>,
            myListLink: (this.props.history.location.pathname === '/myList') ? <div className="same-page">My List</div> : <Link to="/myList" className="home-header-mylist-link">My List</Link>

        };

        this.makeNavbarFading =this.makeNavbarFading.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('scroll', this.makeNavbarFading);
 

    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.makeNavbarFading);
    }




    makeNavbarFading() {
            if (window.scrollY > 10  && this.state.navbarBackground !== 'nav-black') {
                this.setState({navbarBackground: 'nav-black'})
            } else if (window.scrollY === 0) {
                this.setState({navbarBackground: 'nav-transparent'})
            }
    }
   
    
    
    
    render() {
        
        return(
            
                
                <div className={`home-navbar ${this.state.navbarBackground}`}>


                    <div className="home-navbar-contents">

                            <div className="home-header-left-wrap">
                                <Link to="/browse" className="home-header-home-link">
                                    <img className="home-header-logo" src="https://chillflix-seeds.s3-us-west-1.amazonaws.com/misc/chillflix_logo.png" alt="Chillflix"/>
                                </Link>
                                <div className="home-header-mylist-link-wrap">
                                    {this.state.homeLink}
                                </div>
                                <div className="home-header-mylist-link-wrap">
                                    {this.state.myListLink}
                                </div>
                            </div>

                            <nav className="home-profile-menu-wrapper">
                                <div className="profile-img-wrap">
                                    <img className="profile-img" src="https://chillflix-seeds.s3-us-west-1.amazonaws.com/misc/profile_img.png" alt="ProfileImg"/>
                                </div>

                                <div className="hover-profile-menu">    
                                    <div className="profile-menu-arrow-up"><i className="fas fa-caret-up"></i></div>
                                    <div className="home-nav-little-menu-wrap">
                                        <a className="github-button-wrap" href="https://github.com/kinda-dev" target="_blank"><i className="fab fa-github"> GitHub</i></a>
                                        <div className="logout-button" onClick={() => this.props.logout()}>Log Out</div>
                                    </div>
                                </div>
                            </nav>
                            

                    </div>
                </div>
    

        )
    }
}

export default withRouter(NavbarComponent);