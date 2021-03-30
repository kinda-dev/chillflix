import React from 'react';
import  Navbar from '../navbar/navbar_container';
import MovieComponent from '../browse/movie_component_container';

class myListComponent extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllMovies()
}

  render() {
        console.log(this.props.currentUser)


    if (this.props.movies.length === 0) return null;

    return (

        <div className="my-list-page">
              <Navbar />
          <div className="my-list-page-inner-wrap">
              <h1 className="my-list-h1">My List</h1>
              <div className="my-list-row-wrap">
                  {this.props.currentUser.myListMovieIds.map((videoId) => {
                      console.log(videoId)
                      console.log(this.props.movies)
                      let movie = this.props.movies[videoId - 1]
                      return (
                        <div key={videoId - 1} className="my-list-movie-wrap">
                              <MovieComponent movie = {movie} myList = {this.props.currentUser.myListMovieIds}/>                    
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