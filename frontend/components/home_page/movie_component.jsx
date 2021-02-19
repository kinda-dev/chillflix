import React from 'react';
import { Link } from 'react-router-dom';

const MovieComponent = ({movie}) => {

        return(

            <li className="movie-preview" key={movie.id} movieid={movie.id}
                style={{
                    backgroundImage: `url("https://wallpaperaccess.com/full/38539.jpg")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="movie-little-preview">
                    <h1 className="movie-title">{movie.title}</h1>
                </div>

                <div className="movie-preview-info">
                    <video className="movie-preview-video" controls autoPlay loop muted><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source></video>
                    <div className="movie-info">
                        <h2 className="movie-description">{movie.description}</h2>
                        <h2 className="movie-rating">{movie.rating}</h2>
                        <h2 className="movie-year">{movie.year}</h2>
                        <h2 className="movie-duration">{movie.duration}</h2>
                    </div>
                </div>
            </li>
        )   
    }

export default MovieComponent;

