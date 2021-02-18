import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




class HomeComponent extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarBackground: 'nav-transparent'
        };

        this.makeNavbarFading =this.makeNavbarFading.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchAllMovies();
        document.addEventListener('scroll', this.makeNavbarFading);

    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.makeNavbarFading);
    }

    renderAllMovies() {
        debugger
        return(
            <ul>
            {this.props.movies.map((movie, i) => (
                <li key={`movie-${i}`}>
                     {movie.title}
                </li>
            ))}
            </ul>
        );
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
            
            

            <div className='home-outer-wrap' onScroll={this.makeNavbarFading}>
                
                <div className={`home-navbar ${this.state.navbarBackground}`}>


                    <div className="home-navbar-contents">

                        {/* <nav className="home-header-left-nav"> */}
                            <Link to="/browse" className="home-header-home-link">
                                <img className="home-header-logo" src={window.logoImage} alt="Chillflix"/>
                            </Link>  
                            {/* <div className="my-list">My List</div> */}
                        {/* </nav> */}

                        {/* <nav className="home-header-right-nav"> */}

                            {/* <div className="search-menu-wrapper">
                                <i className="icon-search">O</i>
                                <input type="text" className="search-box"/>
                            </div> */}

                            <nav className="home-profile-menu-wrapper">
                                <div className="profile-img-wrap">
                                    <img className="profile-img" src={window.profileImage} alt="ProfileImg"/>
                                </div>
                                <div className="hover-profile-menu">
                                    
                                    <div className="profile-menu-arrow-up"><i className="fas fa-caret-up"></i></div>
                                    <div className="home-nav-little-menu-wrap">
                                        <div className="logout-button" onClick={() => dispatch(this.props.logout())}>Log Out</div>
                                    </div>
                                </div>
                            </nav>
                            

                        {/* </nav> */}
                    </div>
                </div>


                <header className="home-header"
                    style={{
                        backgroundImage: `url("https://wallpaperaccess.com/full/38539.jpg")`,
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="home-header-contents">
                        <h1 className="home-header-movie-title">Back to the future</h1>
                        <h2 className="home-header-movie-description">Are you chicken Mc Flyy?</h2>
                        <div className="home-header-buttons">
                            <div className="home-header-play-button-hover"><button className="home-header-play-button">Play</button></div>
                            <div className="add-to-list-button-hover"><button className="add-to-list-button">+</button></div>
                        </div>
                    </div> 
                        <div className="home-header-movie-rating-wrap"><div className="home-header-movie-rating">PG-13</div></div>
                </header>           

                






                
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>



            </div>
        )
    }
}

export default HomeComponent;