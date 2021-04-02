import React from 'react';
import CarouselArrow from './carousel_arrow';
import CarouselContent from './carousel_content_container';

class CarouselComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentSliderItem: 1
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
  }

  previousSlide() {
    const lastIndex = 2;
    const { currentSliderItem } = this.state;
    const shouldResetIndex = currentSliderItem === 0;
    const index = shouldResetIndex ? currentSliderItem : currentSliderItem - 1;

    this.setState({
      currentSliderItem: index
    });
  }

  nextSlide() {
    const lastIndex = 2;
    const { currentSliderItem } = this.state;
    const shouldResetIndex = currentSliderItem === lastIndex;
    const index = shouldResetIndex ? currentSliderItem : currentSliderItem + 1;

    this.setState({
      currentSliderItem: index
    });
  }

  render(){

    return(
      <div className="carousel">
        <CarouselArrow
          direction="left"
          clickFunction={this.previousSlide}
          currentSliderItem={this.state.currentSliderItem}
          glyph="‹" />

        <CarouselContent currentSliderItem={this.state.currentSliderItem} myList = {this.props.myList} genreMovies={this.props.genreMovies} />

        <CarouselArrow
          direction="right"
          clickFunction={this.nextSlide}
          currentSliderItem={this.state.currentSliderItem}
          glyph="›" />
      </div>
    )
  }
}

export default CarouselComponent;