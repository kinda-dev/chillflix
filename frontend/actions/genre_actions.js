import * as APIUtil from '../util/genre_api_util';

export const RECEIVE_GENRE = 'RECEIVE_GENRE';

  
  export const receiveGenre = (genre) => ({
    type: RECEIVE_GENRE,
    genre,
  });

  
  export const fetchGenre = (genreId) => dispatch => {
      return APIUtil.fetchGenre(genreId)
        .then(genre => dispatch(receiveGenre(genre)))
  };