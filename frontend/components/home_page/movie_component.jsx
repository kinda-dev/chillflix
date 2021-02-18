import React from 'react';
import { Link } from 'react-router-dom';

class MovieComponent extends  React.Component {
    constructor(props) {
        super(props);


    }
    
    componentDidMount() {
        console.log(this.props.movie)
    }

    render() {

        return(

            <div className="movie">
                <h1 className="movie-title">{this.props.movie.title}</h1>
                <h2 className="movie-description">{this.props.movie.description}</h2>
                <h2 className="movie-rating">{this.props.movie.rating}</h2>
                <h2 className="movie-year">{this.props.movie.year}</h2>
                <h2 className="movie-duration">{this.props.movie.duration}</h2>
            </div>
        )
    }

}

export default MovieComponent;