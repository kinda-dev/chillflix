import React from 'react';
import  Navbar from '../navbar/navbar_container';
import MoviePreview from '../browse/movie_component_container';

class myListComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        moviesList: this.props.userList
    };


  }

  componentDidMount() {
    this.props.fetchAllMovies()
    this.setState({ moviesList: this.props.userList })

}

  render() {

    if (this.props.movies.length === 0) return null;

    return (

        <div className="my-list-page">
              <Navbar />
          <div className="my-list-page-inner-wrap">
              <h1 className="my-list-h1">My List</h1>
              <div className="my-list-row-wrap">
                  {this.state.moviesList.map((videoId) => {
                      console.log(videoId)
                      console.log(this.props.movies)
                      let movie = this.props.movies[videoId - 1]
                      return (
                        <div key={videoId - 1} className="my-list-movie-wrap">
                            {console.log(movie.title)}
                              <MoviePreview movie = {movie} myList = {this.state.moviesList}/>                    
                              {/* <div>{movie.title}</div> */}
                              {/* <div className="black">we are here</div> */}
                          </div>
                      )
                  })}

              </div>
          </div>
        </div>
 




    )
  }
}

export default myListComponent;