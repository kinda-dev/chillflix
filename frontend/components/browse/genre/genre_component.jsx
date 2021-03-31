import React from 'react';
import  Navbar from '../../navbar/navbar_container';
import MovieComponent from '../movie_component_container';

class genreComponent extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
      this.props.fetchGenre(1)
    }
    
    render() {
      console.log(this.props.location.state)
        console.log(this.props.currentUser)
        console.log(this.props.genre)


    if (!this.props.genre.genreMovies) return null;

    return (

        <div className="my-list-page">
              <Navbar />
          <div className="my-list-page-inner-wrap">
              <h1 className="my-list-h1">My List</h1>
              <div className="my-list-row-wrap">
                  {this.props.genre.genreMovies.map((movie) => {
                      console.log(movie)
                      console.log(this.props.genre[2])
                      return (
                        <div key={movie.id} className="my-list-movie-wrap">
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

export default genreComponent;