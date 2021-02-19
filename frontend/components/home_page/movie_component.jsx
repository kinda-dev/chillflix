import React from 'react';
import { Link } from 'react-router-dom';

const MovieComponent = ({movie}) => {

        return(

            <li className="movie-preview" movieid={movie.id}
                style={{
                    // backgroundImage: `url("https://www.themarysue.com/wp-content/uploads/2020/03/hook.jpg")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="movie-preview-hover-wrap">
                    <h1 className="movie-title">{movie.title}</h1>


                     <div className="movie-preview-info">
                         <video className="movie-preview-video" controls autoPlay loop muted><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source></video>
                         <div className="movie-info">
                            <h1 className="movie-title-hidden">{movie.title}</h1>
                             <h2 className="movie-description">{movie.description}</h2>
                             <h2 className="movie-rating">Rating: {movie.rating}</h2>
                             <h2 className="movie-year">Year: {movie.year}</h2>
                             <h2 className="movie-duration">Duration: {movie.duration}</h2>
                         </div>
                     </div>
                </div>
            </li>
        )   
    }

export default MovieComponent;

