import React from 'react';
import { Link } from 'react-router-dom';

const MovieComponent = ({movie}) => {

        return(

            <li className="movie-preview" movieid={movie.id}
                style={{
                    backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/831/222/412/edward-norton-fight-club-helena-bonham-carter-movies-wallpaper-preview.jpg")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="movie-preview-hover-wrap">
                    <h1 className="movie-title">{movie.title}</h1>


                     <div className="movie-preview-info">
                         <video className="movie-preview-video" controls autoPlay loop muted><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source></video>
                         <div className="movie-info">
                             <h2 className="movie-description">{movie.description}</h2>
                             <h2 className="movie-rating">{movie.rating}</h2>
                             <h2 className="movie-year">{movie.year}</h2>
                             <h2 className="movie-duration">{movie.duration}</h2>
                         </div>
                     </div>
                </div>
            </li>
        )   
    }

export default MovieComponent;

