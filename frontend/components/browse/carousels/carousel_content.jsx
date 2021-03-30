import React from 'react';
import MovieComponent from '../movie_component_container'

class CarouselContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSliderItem: props.currentSliderItem,
    };
  }

  componentDidMount() {
    // debugger
    // this.props.fetchAllGenres()
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentSliderItem !== prevState.currentSliderItem) {
      return { currentSliderItem: nextProps.currentSliderItem };
    }
    else return null;
  }

  render() {

    if (!this.props.genres.length === 0) return null;
    console.log(this.props.genreMovies)
    console.log(this.props.movies)



            {this.props.genreMovies.map((movieId) => (
              console.log(this.props.movies[movieId - 1].title)
        ))}
    return (
      // <div className="slider-wrap" slide={this.state.currentSliderItem}>

      //   {this.props.movies.map((movie, idx) => (
      //     this.props.genreMovies.includes(movie.id) ? <MovieComponent movie={movie} myList={this.props.myList} key={idx} /> : ''
          
      //   ))}

      // </div>

      <div className="slider-wrap" slide={this.state.currentSliderItem}>

        {this.props.genreMovies.map((movieId) => (
            <MovieComponent movie={this.props.movies[movieId - 1]} myList={this.props.myList} key={movieId - 1} />
        ))}

      </div>
    )
  }
}

export default CarouselContent;