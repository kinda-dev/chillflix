import * as APIUtil from '../util/genre_api_util';

export const RECEIVE_GENRE = 'RECEIVE_GENRE';
export const RECEIVE_GENRES = 'RECEIVE_GENRES';


  
  export const receiveGenre = (genre) => ({
    type: RECEIVE_GENRE,
    genre,
  });

  export const receiveGenres = (genres) => ({
    type: RECEIVE_GENRES,
    genres,
  });
  
  export const fetchGenre = (genreId) => dispatch => {
      return APIUtil.fetchGenre(genreId)
        .then(genre => dispatch(receiveGenre(genre)))
  };

  export const fetchAllGenres = () => dispatch => {
    return APIUtil.fetchAllGenres()
      .then(genres => dispatch(receiveGenres(genres)))
};