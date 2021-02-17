import * as APIUtil from '../util/movie_api_util';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

export const receiveMovies = (movies) => ({
    type: RECEIVE_MOVIES,
    movies,
  });
  
  export const receiveMovie = (movie) => ({
    type: RECEIVE_MOVIE,
    movie,
  });

  export const fetchAllMovies = () => dispatch => {
      return APIUtil.fetchAllMovies()
        .then(movies => dispatch(receiveMovies(movies)))
  };

  
  export const fetchMovie = (movieId) => dispatch => {
      return APIUtil.fetchMovie(movieId)
        .then(movie => dispatch(receiveMovie(movie)))
  };



  
