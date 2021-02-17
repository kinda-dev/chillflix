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
                                <i className="icon-search">O</i>
                                <input type="text" className="search-box"/>
                            </div>

                            <nav className="home-profile-menu-wrapper">
                                <div className="profile-img-wrap">
                                    <img className="profile-img" src={window.profileImage} alt="ProfileImg"/>
                                    <div className="profile-menu-arrow-down">^</div>
                                </div>
                                <div className="hover-profile-menu">
                                    <div className="profile-menu-arrow-up">^</div>
                                    <div className="home-nav-little-menu-wrap">
                                        <div className="logout-button" onClick={() => dispatch(this.props.logout())}>Log Out</div>
                                    </div>
                                </div>
                            </nav>


                        </nav>
                    </div>
                </div>

                {/* <div className="dummy">SOMETHING HERE</div> */}

            </div>
        )
    }
}

export default HomeComponent;