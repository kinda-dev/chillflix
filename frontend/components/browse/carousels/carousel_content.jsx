import React from 'react';
import MovieComponent from '../movie_component_container'

class CarouselContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSliderItem: props.currentSliderItem
    };
  }

  componentDidMount() {
//  debugger
}


  handleMouseOut() {
    this.setState({ listButton: '' })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentSliderItem !== prevState.currentSliderItem) {
      return { currentSliderItem: nextProps.currentSliderItem };
    }
    else return null;
  }

  render() {

    if (this.props.movies.length === 0) return null;
    console.log(this.props.movies.length)

    return (
      <div className="slider-wrap" slide={this.state.currentSliderItem}>

        {this.props.movies.map((movie, idx) => (
            <MovieComponent movie={movie} myList={this.props.myList} key={idx} />
          // <li className="slider-item" 
          //   key={movie.id} 
          //   movieid={movie.id} 
          //   src={movie.movieImage} 
          //   // onMouseOver={this.myListButton(movie.id)}
          //   // onMouseOut={this.handleMouseOut()}
          //   >
          //       <div className="movie-preview-hover-wrap">
          //                   {/* onMouseOver={this.myListButton(movie.id)} */}
          //     {/* onMouseOut={this.handleMouseOut()} */}
          //           <img className="movie-image" src={movie.movieImage} alt={movie.title}/>
          //           <h1 className="movie-title">{movie.title}</h1>

          //            <div className="movie-preview-info">
          //                <video className="movie-preview-video" autoPlay  loop muted><source src={movie.movieTrailer}></source></video>
          //                <div className="movie-info">
          //                   <h1 className="movie-title-hidden">{movie.title}</h1>
          //                   <div className='movie-list-button-wrap'>{this.state.listButton}</div>
          //                    <h2 className="movie-description">{movie.description}</h2>
          //                    <h2 className="movie-rating">Rating: {movie.rating}</h2>
          //                    <h2 className="movie-year">Year: {movie.year}</h2>
          //                    <h2 className="movie-duration">Duration: {movie.duration}</h2>
          //                </div>
          //            </div>
          //       </div>
          //   </li>
        ))}

      {this.props.movies.map((movie, idx) => (
            <MovieComponent movie={movie} myList={this.props.myList} key={idx} />

        ))}
        {/* <div className="slider-item">
          <img src={window.thepest} alt="thepest" />
        </div>
        <div className="slider-item">
          <img src={window.thepest} alt="thepest" />
        </div>
        <div className="slider-item">
          <img src={window.thepest} alt="thepest" />
        </div>
        <div className="slider-item">
          <img src={window.thepest} alt="thepest" />
        </div>
        <div className="slider-item">
          <img src={window.thepest} alt="thepest" />
        </div>
        <div className="slider-item">
          <img src={window.thepest} alt="thepest" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.kindergartencop} alt="kindergartencop" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div>
        <div className="slider-item">
          <img src={window.surfninjas} alt="surfninjas" />
        </div> */}
      </div>
    )
  }
}

export default CarouselContent;