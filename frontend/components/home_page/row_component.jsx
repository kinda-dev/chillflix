import React from 'react';
import { Link } from 'react-router-dom';
import MovieComponent from './movie_component'

class RowComponent extends  React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allMovies:'',
            rowMovies:''
          };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);

    }

    componentDidMount () {
        // debugger
        // this.renderMovies()
        const movies = []
        this.props.movies.map((movie) => (
            movies.push(movie)
        ))
        this.setState({allMovies: movies})
        this.setState({rowMovies: movies.slice(0, 5)})



    }

    previous() {
        this.renderMovies('previous')
    }

    next() {
        // debugger
        this.renderMovies('next')
    }

    renderMovies(direction) {
        let movies = this.state.allMovies



        if (direction === 'previous') {
            movies = movies.reverse()
            movies.push(movies.shift())
            this.setState({allMovies: movies.reverse()})
            this.setState({rowMovies: this.state.allMovies.slice(0, 5)})
        } else if (direction === 'next') {
            movies.push(movies.shift())
            this.setState({allMovies: movies})
            this.setState({rowMovies: this.state.allMovies.slice(0, 5)})
        } else {
            this.setState({rowMovies: movies.slice(0, 5)})
        }
        
        
    }

    render() {

        // if (this.props.movies.length === 0) return null;
        if (this.state.rowMovies.length === 0) return null;


        return(

            
            <div className="row">
                <ul className="row-elements">

                    <button className="carousel-arrow" onClick={this.previous}><i className="fas fa-chevron-left"></i></button>
                    <div className="row-movies-wrap">
                        <h2 className="row-title">Top Trending</h2>
                        <div className="little-movies-wrap">
                            {this.state.rowMovies.map((movie) => (
                                <MovieComponent key={movie.id} movie={movie}/>
                                ))}
                        </div>
                    </div>
                    <button className="carousel-arrow" onClick={this.next}><i className="fas fa-chevron-right"></i></button>
                    
                </ul>
            </div>

        )   
    }

}

export default RowComponent;