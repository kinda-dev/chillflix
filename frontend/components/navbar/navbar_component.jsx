import React from 'react';
import { Link, withRouter } from 'react-router-dom';




class NavbarComponent extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarBackground: 'nav-transparent',
            homeLink: (this.props.history.location.pathname === '/browse') ? <div className="same-page">Home</div> : <Link to="/browse" className="home-header-mylist-link">Home</Link>,
            myListLink: (this.props.history.location.pathname === '/myList') ? <div className="same-page">My List</div> : <Link to="/myList" className="home-header-mylist-link">My List</Link>,
            genresLink: (this.props.history.location.pathname === `/browse/genre/:genreId`) ? 'same-page-genres' : 'home-header-mylist-link',
            movies: '',
            search: '',
            searched: ''
        };

        this.makeNavbarFading =this.makeNavbarFading.bind(this);
        this.handleClick = this.handleClick.bind(this)
        this.setMovies = this.setMovies.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

    }
    
    componentDidMount() {
        document.addEventListener('scroll', this.makeNavbarFading);
        this.props.fetchAllMovies()
            .then(() => {
                this.setMovies()
                
            });
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

    setMovies() {
        const movies = {}
        this.props.movies.map((movie) => {
            let title = movie.title
            let id = movie.id
            movies[id] = title
        })

        this.setState({
            movies: Object.values(movies)
        })
        // console.log(this.state.movies)
    //   const whatever = Object.values(this.state.movies)
    //   console.log(this.state.movies)
    //   console.log(whatever)
    //   console.log(whatever.includes(`WAR`))
    //   console.log(whatever.filter(ele => ele.includes('THE')))
    // console.log(whatever.findIndex(ele => ele === 'WAR DOGS'))
    }
    
    handleSearch(e) {
        this.setState({search: e.target.value})
        this.searchFunction(this.state.search)
    }
   
    handleClick(e) {
        debugger
        this.props.fetchAllMovies()
    }

    searchFunction(input) {
        const searchedMovies = {}
        let filteredMovies = this.state.movies.filter(ele => ele.includes(input))
        filteredMovies.forEach((movie, idx) => {
            searchedMovies[idx] = movie
        })
        this.setState({searched: Object.values(searchedMovies)})
    }

    renderMovie() {
        this.state.searched.forEach((movie) =>{
            return(
                <div className="navbar-genre-item">{movie}</div>
            )
        }) 
    }
    
    
    render() {
        if (this.props.movies.lentgh === 0) return null;
        return(
            
            
            <div className={`home-navbar ${this.state.navbarBackground}`}>
                    {/* {(this.state.movies === '') ? this.setMovies() : ''} */}


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
                                    <div className={this.state.genresLink}>Genre</div>
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
                                <div className="home-header-mylist-link-wrap">
                                    <form>
                                        <input placeholder="Enter a Movie Title" type="text" value={this.state.search} onChange={this.handleSearch}/>
                                        <div className="navbar-search-list-wrap">
                                            <div className="navbar-genres-list-inner-wrap">
                                                {(this.state.search !== '') ?
                                                this.renderMovie() : ''}
                                            </div>
                                        </div>
                                    </form>
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