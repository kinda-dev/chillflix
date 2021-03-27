import React from 'react';
import  Navbar from '../navbar/navbar_container';
import MoviePreview from '../browse/movie_component_container';

class WatchTrailer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        listButton: this.props.myList.includes(this.props.movieId) ? <i className="fa fa-check-circle movie-icon" ></i> : <i className="fa fa-plus-circle movie-icon" aria-hidden="true"></i>
    };

    // this.handleList = this.handleList.bind(this)
  }

    componentDidMount() {
        this.props.fetchMovie(this.props.movieId)
        // debugger

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

    if (this.props.movie === undefined) return null;
    let movie = this.props.movie
    console.log(movie.movieTrailer)
    return (

        <div className="watch-trailer-page">
              {/* <Navbar /> */}
          <div className="watch-trailer-page-inner-wrap">
              <div className="controls-wrap">
                <h1 className="my-list-h1">{movie.title}</h1>
              </div>
              <div className="trailer-wrap">
                <video className="movie-preview-video" autoPlay controls loop muted><source src={movie.movieTrailer}></source></video>
              </div>
          </div>
        </div>
 




    )
  }
}

export default WatchTrailer;