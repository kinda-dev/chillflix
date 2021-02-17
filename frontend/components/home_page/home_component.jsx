import React from 'react';
import { Link } from 'react-router-dom';




class HomeComponent extends  React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchAllMovies();
    }

    renderAllMovies() {
        return(
            <ul>
            {this.props.movies.map((movie, i) => (
                <li key={`movie-${i}`}>
                     {movie.title}
                     {/* <p>{movie.description}</p> */}
                </li>
            ))}
            </ul>
        );
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

                <h1>
                    <video className="splash-video" controls autoPlay loop muted><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source></video>

                    {this.renderAllMovies()}

                </h1>

                </div>

            </div>
        )
    }
}

export default HomeComponent;