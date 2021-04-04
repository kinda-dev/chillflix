import React from 'react';
import { Link } from 'react-router-dom';


class MovieComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        listButton: this.props.currentUser.myListMovieIds.includes(this.props.movie.id) ? <i className="fa fa-check-circle movie-icon" ></i> : <i className="fa fa-plus-circle movie-icon" aria-hidden="true"></i>
    };

    this.handleList = this.handleList.bind(this)
  }

  componentDidMount() {
    this.setState({ listButton: 
      this.props.currentUser.myListMovieIds.includes(this.props.movie.id) ? <i className="fa fa-check-circle movie-icon" ></i> : <i className="fa fa-plus-circle movie-icon" aria-hidden="true"></i> })

  
  }

handleList(e) {
    e.preventDefault()

    if (this.props.currentUser.myListMovieIds.includes(this.props.movie.id)) {
        this.props.deleteFromList(this.props.movie.id, this.props.currentUser)
        this.setState({ listButton: <i className="fa fa-plus-circle movie-icon" ></i> })
    } else {
        this.props.addToList(this.props.movie.id, this.props.currentUser)
        this.setState({ listButton: <i className="fa fa-check-circle movie-icon" ></i> })
            
    }
}

  render() {

    if (!this.props.movie) return null;
    let movie = this.props.movie
    return (
      
          <li className="slider-item" 
            movieid={movie.id} 
            src={movie.movieImage} 
            >
                <div className="movie-preview-hover-wrap">
                    <img className="movie-image" src={movie.movieImage} alt={movie.title}/>
                    <h1 className="movie-title">{movie.title}</h1>
                     <div className="movie-preview-info">
                            
                         <div className="movie-info">
                            <h1 className="movie-title-hidden">{movie.title}</h1>
                             <h2 className="movie-description">{movie.description}</h2>
                             <div className="movie-buttons-wrap">
                               <Link to={`/watch/${movie.id}`} location={this.props.location}>
                                <div className='movie-play-button-wrap movie-icon-wrap'
                                  ><i className="fas fa-play-circle movie-icon"></i>
                                </div>
                              </Link>
                              
                                <div className='movie-list-button-wrap movie-icon-wrap' onClick={this.handleList}>{this.state.listButton}</div>
                             </div>
                             <div className="movie-info-inner-wrap">
                                <h2 className="movie-year movie-infos-wrap">{movie.year}</h2>
                                <h2 className="movie-rating movie-infos-wrap">{movie.rating}</h2>
                                <h2 className="movie-duration movie-infos-wrap">{movie.duration}</h2>
                             </div>
                         </div>
                     </div>
                </div>
            </li>
 




    )
  }
}

export default MovieComponent;