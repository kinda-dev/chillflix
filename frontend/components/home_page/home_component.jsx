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


                <div className="home-navbar">
                    <div className="home-navbar-contents">

                        <nav className="home-header-left-nav">
                            <Link to="/browse" className="home-header-home-link">
                                <img className="home-header-logo" src={window.logoImage} alt="Chillflix"/>
                            </Link>  
                            <div className="my-list">My List</div>
                        </nav>

                        <nav className="home-header-right-nav">

                            <div className="search-menu-wrapper">
                                <i className="fas fa-search">O</i>
                                <input type="text" className="search-box"/>
                            </div>

                            <nav className="home-profile-menu-wrapper">
                                <div className="profile-img-wrap">
                                    <img className="profile-img" src={window.profileImage} alt="ProfileImg"/>
                                    <div className="fas fa-sort-down">^</div>
                                </div>
                                <div className="hover-profile-menu">
                                    <div className="logout-button" onClick={() => dispatch(logout())}>Log Out</div>
                                </div>
                            </nav>

                        </nav>

                    </div>
                </div>

            </div>
        )
    }
}

export default HomeComponent;