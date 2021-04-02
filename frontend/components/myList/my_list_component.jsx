import React from 'react';
import  Navbar from '../navbar/navbar_container';
import MovieComponent from '../browse/movie_component_container';

class myListComponent extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenre(1)
  }

  render() {


        if (this.props.genre.genre_name !== "Top Trending") return null;


    return (

        <div className="my-list-page">
              <Navbar />
          <div className="my-list-page-inner-wrap">
              <h1 className="my-list-h1">My List</h1>
              <div className="my-list-row-wrap">
                  {this.props.currentUser.myListMovieIds.map((videoId) => {
                      let movie = this.props.genre.genreMovies[videoId - 1]
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