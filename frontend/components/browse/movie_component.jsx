import React from 'react';

class MovieComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        listButton: this.props.myList.includes(this.props.movie.id) ? <i className="fa fa-check-circle" ></i> : <i className="fa fa-plus-circle" aria-hidden="true"></i>
    };

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
//  debugger
}

handleClick(e) {
    e.preventDefault()
    if (this.props.myList.includes(this.props.movie.id)) {
        this.props.deleteFromList(this.props.movie.id, this.props.currentUser)
        this.setState({ listButton: <i className="fa fa-plus-circle" ></i> })
    } else {
        this.props.addToList(this.props.movie.id, this.props.currentUser)
        this.setState({ listButton: <i className="fa fa-check-circle" ></i> })
            
    }
}

  render() {

    if (!this.props.movie) return null;
    let movie = this.props.movie
    return (

          <li className="slider-item" 
            movieid={movie.id} 
            src={movie.movieImage} 
            // onMouseOver={this.myListButton(movie.id)}
            // onMouseOut={this.handleMouseOut()}
            onClick={this.handleClick}
            >
                <div className="movie-preview-hover-wrap">
                    <img className="movie-image" src={movie.movieImage} alt={movie.title}/>
                    <h1 className="movie-title">{movie.title}</h1>

                     <div className="movie-preview-info">
                         <video className="movie-preview-video" autoPlay  loop muted><source src={movie.movieTrailer}></source></video>
                         <div className="movie-info">
                            <h1 className="movie-title-hidden">{movie.title}</h1>
                            <div className='movie-list-button-wrap'>{this.state.listButton}</div>
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
}

export default MovieComponent;