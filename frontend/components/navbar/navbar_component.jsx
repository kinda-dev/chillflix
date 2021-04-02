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

        this.clear = null

        this.makeNavbarFading =this.makeNavbarFading.bind(this);
        this.setMovies = this.setMovies.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearFields = this.clearFields.bind(this)

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
        clearTimeout(this.clear)
        this.clear = 0
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
    }
    
    handleSearch(e) {
        this.setState({search: e.target.value})
        const input = this.state.search.toUpperCase()
        const inputNoExtraSpaces = input.trim().split(/ +/).join(' ');
        this.searchFunction(inputNoExtraSpaces)
    }
   

    handleSubmit(e) {
        e.preventDefault()
        const input = this.state.searched
        const inputNoExtraSpaces = input.trim().split(/ +/).join(' ');
        if (inputNoExtraSpaces !== '') (this.openSearchResult(this.state.searched))
    }

    searchFunction(input) {
        let filteredMovies = this.state.movies.filter(ele => ele.includes(input))
        filteredMovies.forEach((movie, idx) => {
            this.setState({searched: movie})
        })
    }

    openSearchResult(searchedMovie) {
        const movieId = this.state.movies.findIndex(ele => ele === searchedMovie) + 1
        this.props.history.push(`/watch/${movieId}`)
    }

    clearFields() {
        this.clear = setTimeout(() => {
            this.setState({
                    search: '',
                    searched: ''
                })
                    
        }, 2000)
    }
     
    
    render() {
        if (this.props.movies.lentgh === 0) return null;
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
                        </div>
                        <div className="home-header-right-wrap">
                                <div className="home-header-search-wrap">
                                    <div className="home-header-inner-search-wrap" onBlur={this.clearFields}>
                                        <form onSubmit={this.handleSubmit} value={this.state.searched}>
                                            <input className="home-header-search-input" placeholder="Enter a Movie Title" type="text" value={this.state.search} onChange={this.handleSearch}/>
                                            <div className="navbar-search-list-wrap">
                                                <div className="navbar-genres-list-inner-wrap">
                                                    {(this.state.searched !== '') ?
                                                    <div className="navbar-search-item" onClick={this.handleSubmit} >{this.state.searched}</div>
                                                    : ''}
                                                </div>
                                            </div>
                                        </form>
                                        <div className="home-header-search-button-wrap" onClick={this.handleSubmit}><i className="fas fa-search"></i></div>
                                    </div>
                                </div>
                            <nav className="home-profile-menu-wrapper">
                                <div className="profile-img-wrap">
                                    <img className="profile-img" src="https://chillflix-seeds.s3-us-west-1.amazonaws.com/misc/profile_img.png" alt="ProfileImg"/>
                                </div>
                                <div className="hover-profile-menu">    
                                    <div className="home-nav-little-menu-wrap">
                                        <a className="github-button-wrap" href="https://github.com/kinda-dev" target="_blank"><i className="fab fa-github"> GitHub</i></a>
                                        <div className="logout-button" onClick={() => this.props.logout()}>Log Out</div>
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