import React from 'react';

class CarouselContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSliderItem: props.currentSliderItem
    };
  }

  componentDidMount() {
    //condition logic for hitting db
    // this.props.fetchAllMovies();
    // document.addEventListener('scroll', this.makeNavbarFading);

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

        {this.props.movies.map((movie) => (
            <li className="slider-item" key={movie.id} movieid={movie.id} src={movie.movieImage}>
                <div className="movie-preview-hover-wrap">
                    <img className="movie-image" src={movie.movieImage} alt={movie.title}/>
                    <h1 className="movie-title">{movie.title}</h1>


                     <div className="movie-preview-info">
                         <video className="movie-preview-video" autoPlay loop muted><source src={movie.movieTrailer}></source></video>
                         <div className="movie-info">
                            <h1 className="movie-title-hidden">{movie.title}</h1>
                             <h2 className="movie-description">{movie.description}</h2>
                             <h2 className="movie-rating">Rating: {movie.rating}</h2>
                             <h2 className="movie-year">Year: {movie.year}</h2>
                             <h2 className="movie-duration">Duration: {movie.duration}</h2>
                         </div>
                     </div>
                </div>
            </li>
        ))}

{this.props.movies.map((movie) => (
            <li className="slider-item" key={movie.id} movieid={movie.id} src={movie.movieImage}
                style={{
                    // backgroundImage: `url("https://www.themarysue.com/wp-content/uploads/2020/03/hook.jpg")`,
                    // backgroundPosition: "center",
                    // backgroundSize: "cover",
                }}
                >
                <div className="movie-preview-hover-wrap">
                    <img className="movie-image" src={movie.movieImage} alt={movie.title}/>
                    <h1 className="movie-title">{movie.title}</h1>


                     <div className="movie-preview-info">
                         <video className="movie-preview-video" autoPlay loop muted><source src={movie.movieTrailer}></source></video>
                         <div className="movie-info">
                            <h1 className="movie-title-hidden">{movie.title}</h1>
                             <h2 className="movie-description">{movie.description}</h2>
                             <h2 className="movie-rating">Rating: {movie.rating}</h2>
                             <h2 className="movie-year">Year: {movie.year}</h2>
                             <h2 className="movie-duration">Duration: {movie.duration}</h2>
                         </div>
                     </div>
                </div>
            </li>
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