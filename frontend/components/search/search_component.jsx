import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchComponent extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        
        this.handleSearch = this.handleSearch.bind(this)
        this.searchFunction = this.searchFunction.bind(this)
        this.openSearchResult = this.openSearchResult.bind(this)
        this.clearFields = this.clearFields.bind(this)
        
        this.hideElement = React.createRef();
        this.clear = null

    }
    
    componentDidMount() {
        this.props.fetchAllMovies();
    }

    componentWillUnmount() {
        clearTimeout(this.clear);
        this.clear = 0;
    }
    
    handleSearch(e) {
        this.setState({search: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        const input = this.state.searched
        const inputNoExtraSpaces = input.trim().split(/ +/).join(' ');
        if (inputNoExtraSpaces !== '') (this.openSearchResult(this.state.searched))
    }

    searchFunction() {
        let input = this.state.search.toUpperCase()
        let inputNoExtraSpaces = input.trim().split(/ +/).join(' ');
        let filteredMovies = Object.values(this.props.movies).filter(ele => ele.title.includes(inputNoExtraSpaces))
        if (inputNoExtraSpaces === '' || filteredMovies.length === 0) {
            filteredMovies = []
            return (
                filteredMovies
                
            )
        } else {
            return (
                filteredMovies
            )
        }
    }

    clearFields() {
        this.clear = setTimeout(() => {
            this.setState({
                    search: ''
                })
                    
        }, 500)
    }

    openSearchResult(e) {
        const movieId = parseInt(e.target.id)
        this.props.history.push(`/watch/${movieId}`)
    }

    render() {
        if (this.props.movies.length === 0) return null;
        console.log('movies:', this.props.movies);
        return(
            
            <div className="home-header-search-wrap">
                <div className="home-header-search-elements-wrap" onBlur={this.clearFields}>
                    <div className="home-header-inner-search-wrap">
                        <input className="home-header-search-input" placeholder="Enter a Movie Title" type="text" value={this.state.search} onChange={this.handleSearch}/>
                        <div className="home-header-search-button-wrap"><i className="fas fa-search"></i></div>
                    </div>
                        <div className="search-result-list-wrap" ref={this.hideElement}>
                            {(this.state.search !== '' && this.state.search.trim().split(/ +/).join(' ') !== '') ?
                                <div className="search-result-list">
                                {(this.searchFunction().length == 0) ?
                                    <h1 className="navbar-search-item">No result matches your search</h1> 
                                    :
                                    this.searchFunction().map((movie) => {
                                        return (
                                            <div key={movie.id} className="navbar-genre-item-hover">
                                                <h1 key={movie.id} id={movie.id} className="navbar-genre-item" onClick={this.openSearchResult}>{movie.title}</h1> 
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            : ''}
                        </div>
                </div>
            </div>

        )
    }
}

export default withRouter(SearchComponent);