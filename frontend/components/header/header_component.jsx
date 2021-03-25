import React from 'react';

class HeaderComponent extends  React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        return(

            <header className="home-header"
                style={{
                    backgroundImage: `url(${this.props.movie.movieImage})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            >
            <div className="home-header-contents">
                <h1 className="home-header-movie-title">{this.props.movie.title}</h1>
                <h2 className="home-header-movie-description">{this.props.movie.description}</h2>
                <div className="home-header-buttons">
                    <div className="home-header-play-button-hover"><button className="home-header-play-button">Play</button></div>
                </div>
            </div> 
                <div className="home-header-movie-rating-wrap"><div className="home-header-movie-rating">{this.props.movie.rating}</div></div>
            </header>  
        )
    }

}

export default HeaderComponent;