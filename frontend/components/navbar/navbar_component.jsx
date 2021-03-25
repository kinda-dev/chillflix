import React from 'react';
import { Link } from 'react-router-dom';




class NavbarComponent extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarBackground: 'nav-transparent',
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

        
                            <Link to="/browse" className="home-header-home-link">
                                <img className="home-header-logo" src="https://chillflix-seeds.s3-us-west-1.amazonaws.com/misc/chillflix_logo.png" alt="Chillflix"/>
                            </Link>  

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

export default NavbarComponent;