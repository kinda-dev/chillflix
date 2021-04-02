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
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentSliderItem !== prevState.currentSliderItem) {
      return { currentSliderItem: nextProps.currentSliderItem };
    }
    else return null;
  }

  render() {

    return (
      <div className="slider-wrap" slide={this.state.currentSliderItem}>

        {this.props.genreMovies.map((movie) => (
            <MovieComponent movie={movie} myList={this.props.myList} key={movie.id} />
        ))}
      </div>
    )
  }
}

export default CarouselContent;
