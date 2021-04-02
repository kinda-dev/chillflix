import React from 'react';
import  Navbar from '../navbar/navbar_container';
import MoviePreview from '../browse/movie_component_container';

class WatchTrailer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideElement: 'watch-trailer-play-wrap'    };
    
    this.playMovie = React.createRef();
    this.startPlaying = this.startPlaying.bind(this)
  }

    componentDidMount() {
        this.props.fetchMovie(this.props.movieId)
        this.playMovie.current.disablePictureInPicture = true
        this.playMovie.current.load()

    }

    startPlaying() {

      this.playMovie.current.load()
      this.setState({ 
        hideElement: 'hidden',
      }) 
      this.playMovie.current.play()
    }

  render() {

    if (!this.props.movie) return null;
    let movie = this.props.movie

    return (
      
      <div className="watch-trailer-page">
          <div className="watch-trailer-title-close-wrap">
            <h1 className="watch-trailer-title">{movie.title}</h1>
            <div className="watch-trailer-close-button-wrap" onClick={() => this.props.history.goBack()}><i className="far fa-times-circle"></i></div>
          </div>
          <div className="watch-trailer-page-inner-wrap">
              <div className={this.state.hideElement} 
                onClick={this.startPlaying}
              >

                <button className="watch-trailer-play-button">Play Movie</button>
              </div>
              <div className="trailer-wrap">
                <video className="watch-trailer-video" poster={movie.movieImage} ref={this.playMovie} autoPlay={false} controls controlsList="nodownload" preload="metadata" loop muted={false}><source src={movie.movieTrailer}></source></video>
              </div>
          </div>
        </div>
 




    )
  }
}

export default WatchTrailer;