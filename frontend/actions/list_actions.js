import * as APIUtil from '../util/list_util';

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const DELETE_FROM_LIST = 'DELETE_FROM_LIST';
export const RECEIVE_LIST_MOVIES = "RECEIVE_LIST_MOVIES"


const receiveListMovie = (movie, currentUser) => ({
    type: ADD_TO_LIST,
    movie,
    currentUser
   
});

const deleteListMovie = (movieId, currentUser) => ({
    type: DELETE_FROM_LIST,
    movieId,
    currentUser
});


export const addToList = (movie, currentUser) => dispatch => {
    return APIUtil.addToList(movie)
        .then(movie => dispatch(receiveListMovie(movie, currentUser)))
};


export const deleteFromList = (movieId, currentUser) => dispatch => {
    return APIUtil.deleteFromList(movieId)
        .then(() => dispatch(deleteListMovie(movieId, currentUser)))
};
