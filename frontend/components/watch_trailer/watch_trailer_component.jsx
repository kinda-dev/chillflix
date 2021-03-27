import React from 'react';
import  Navbar from '../navbar/navbar_container';
import MoviePreview from '../browse/movie_component_container';

class WatchTrailer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideElement: 'watch-trailer-play-wrap',
      showElement: 'hidden'
    };
    
    this.playMovie = React.createRef();
    this.startPlaying = this.startPlaying.bind(this)
  }

    componentDidMount() {
        this.props.fetchMovie(this.props.movieId)
        this.playMovie.current.disablePictureInPicture = true
        // console.log(this.playMovie.current)
        // this.playMovie.current.muted = false
        // this.startPlaying()


        // this.playMovie.current.muted = false
        // debugger

    }

    startPlaying() {
      console.log(true)

      this.setState({ 
        hideElement: 'hidden', 
        showElement: 'watch-trailer-video'})
      this.playMovie.current.play()

      
      // this.playMovie.current.muted = false
      // this.playMovie.current.play()
      // this.playMovie.current.pause()
      // this.playMovie.current.allow="autoplay; fullscreen"


    }

    // handleList(e) {
    //     e.preventDefault()
    //     if (this.props.myList.includes(this.props.movie.id)) {
    //         this.props.deleteFromList(this.props.movie.id, this.props.currentUser)
    //         this.setState({ listButton: <i className="fa fa-plus-circle movie-icon" ></i> })
    //     } else {
    //         this.props.addToList(this.props.movie.id, this.props.currentUser)
    //         this.setState({ listButton: <i className="fa fa-check-circle movie-icon" ></i> })

    //     }
    // }

  render() {

    if (!this.props.movie) return null;
    let movie = this.props.movie
    {console.log(movie.movieTrailer)}

    return (
      
      <div className="watch-trailer-page">
              {/* <Navbar /> */}
                <div className="watch-trailer-title-close-wrap">
                  <h1 className="watch-trailer-title">{movie.title}</h1>
                  <div className="watch-trailer-close-button-wrap" onClick={() => this.props.history.goBack()}><i className="far fa-times-circle"></i></div>
                </div>
          <div className="watch-trailer-page-inner-wrap">
              <div className={this.state.hideElement} 
                onClick={this.startPlaying}
              >
                      {console.log(this.props.history.location.pathname)}

                <button className="watch-trailer-play-button">Play Movie</button>
              </div>
              <div className="trailer-wrap">
                  {console.log(movie.movieTrailer)}
                {/* <iframe className="watch-trailer-video" ref={this.playMovie} src="https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/war_dogs_trailer.mp4" allow="autoplay; fullscreen"  controls controlsList="nodownload"></iframe> */}
                {/* <video className="watch-trailer-video" poster={movie.movieImage} ref={this.playMovie} autoPlay={true} controls controlsList="nodownload" loop muted={false}><source src={this.props.movie.movieTrailer}></source></video> */}
                <video className="watch-trailer-video" poster={movie.movieImage} ref={this.playMovie} autoPlay={false} controls controlsList="nodownload" loop muted={false}><source src="https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/war_dogs_trailer.mp4"></source></video>

              </div>
          </div>
        </div>
 




    )
  }
}

export default WatchTrailer;