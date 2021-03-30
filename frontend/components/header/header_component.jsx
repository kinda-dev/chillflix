import React from 'react';

class HeaderComponent extends  React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        // debugger
        // const idx = Math.floor(Math.random() * (19 - 1)) + 1
        // this.props.fetchMovie(idx)
    }

    render() {
        if (!this.props.movie) return null;


        return(

            <header className="home-header"
            
            style={{
                backgroundImage: `url(${this.props.movie.movieImage})`,
                backgroundPosition: "center center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
            }}
            >
            <div className="home-header-contents">
                <h1 className="home-header-movie-title">{this.props.movie.title}</h1>
                <h2 className="home-header-movie-description">{this.props.movie.description}</h2>
                <div className="home-header-buttons">
                    <div className="home-header-play-button-hover" ><button onClick={() => this.props.history.push(`/watch/${this.props.movie.id}`)} className="home-header-play-button">Play</button></div>
                </div>
            </div> 
                <div className="home-header-movie-rating-wrap"><div className="home-header-movie-rating">{this.props.movie.rating}</div></div>
            </header>  
        )
    }

}

export default HeaderComponent;