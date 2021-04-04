import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchComponent from '../search/search_container';




class NavbarComponent extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarBackground: 'nav-transparent',
            homeLink: (this.props.history.location.pathname === '/browse') ? <div className="same-page">Home</div> : <Link to="/browse" className="home-header-mylist-link">Home</Link>,
            myListLink: (this.props.history.location.pathname === '/myList') ? <div className="same-page">My List</div> : <Link to="/myList" className="home-header-mylist-link">My List</Link>,
            genresLink: ((this.props.history.location.pathname !== '/browse') && (this.props.history.location.pathname !== '/myList')) ? 'same-page-genres' : 'home-header-mylist-link',
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
                        <div className="home-header-mylist-link-wrap my-list-hover">
                            <div className={this.state.genresLink} id="default-cursor">Genre</div>
                            <div className="navbar-genres-list-wrap">
                                <div className="navbar-genres-list-inner-wrap">
                                    <div className="navbar-genre-item-hover">
                                        <div className="navbar-genre-item" onClick={() => this.props.history.push(`/browse/genre/${1}`)}>Top trending</div>
                                    </div>
                                    <div className="navbar-genre-item-hover">
                                        <div className="navbar-genre-item" onClick={() => this.props.history.push(`/browse/genre/${2}`)}>Drama</div>
                                    </div>
                                    <div className="navbar-genre-item-hover">
                                        <div className="navbar-genre-item" onClick={() => this.props.history.push(`/browse/genre/${3}`)}>Comedies</div>
                                    </div>
                                    <div className="navbar-genre-item-hover">
                                        <div className="navbar-genre-item" onClick={() => this.props.history.push(`/browse/genre/${4}`)}>Based on Real Life</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-header-right-wrap">
                            <SearchComponent/>
                        <nav className="home-profile-menu-wrapper">
                            <div className="profile-img-wrap">
                                <img className="profile-img" src="https://chillflix-seeds.s3-us-west-1.amazonaws.com/misc/profile_img.png" alt="ProfileImg"/>
                            </div>
                            <div className="hover-profile-menu"> 
                                <div className="navbar-profile-menu-item-hover">
                                    <a className="navbar-profile-menu-item" href="https://www.linkedin.com/in/fabio-raffaele-bortone" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
                                </div>
                                <div className="navbar-profile-menu-item-hover">
                                    <a className="navbar-profile-menu-item" href="https://github.com/kinda-dev" target="_blank"><i className="fab fa-github"></i> GitHub</a>
                                </div>
                                <div className="navbar-profile-menu-item-hover">
                                    <a className="navbar-profile-menu-item" href="mailto:maybe.fabio@gmail.com" target="_blank"><i className="fas fa-at"></i> E-mail</a>
                                </div>
                                <div className="navbar-profile-menu-item-hover">
                                    <div className="navbar-profile-menu-item" onClick={() => this.props.logout()}>Log Out</div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(NavbarComponent);