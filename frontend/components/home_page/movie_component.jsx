import React from 'react';
import { Link } from 'react-router-dom';


class MovieComponent extends  React.Component {
    constructor(props) {
        super(props);

    }

        componentDidMount() {
            this.props.fetchMovie(this.props.movie.id)
        }
      
    render() {

        if (this.props.movie === null) return null;

        return(

            <li className="movie-preview" movieid={this.props.movie.id} src={this.props.movie.movieImage}
                style={{
                    // backgroundImage: `url("https://www.themarysue.com/wp-content/uploads/2020/03/hook.jpg")`,
                    // backgroundPosition: "center",
                    // backgroundSize: "cover",
                }}
            >
                <div className="movie-preview-hover-wrap">
                    <img className="movie-image" src={this.props.movie.movieImage} alt={this.props.movie.title}/>
                    <h1 className="movie-title">{this.props.movie.title}</h1>


                     <div className="movie-preview-info">
                         <video className="movie-preview-video" controls autoPlay loop muted><source src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"}></source></video>
                         <div className="movie-info">
                            <h1 className="movie-title-hidden">{this.props.movie.title}</h1>
                             <h2 className="movie-description">{this.props.movie.description}</h2>
                             <h2 className="movie-rating">Rating: {this.props.movie.rating}</h2>
                             <h2 className="movie-year">Year: {this.props.movie.year}</h2>
                             <h2 className="movie-duration">Duration: {this.props.movie.duration}</h2>
                         </div>
                     </div>
                </div>
            </li>
        )   
    }
}
export default MovieComponent;

