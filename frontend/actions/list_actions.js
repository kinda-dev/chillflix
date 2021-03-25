import * as APIUtil from '../util/list_util';

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const DELETE_FROM_LIST = 'DELETE_FROM_LIST';
export const RECEIVE_LIST_MOVIES = "RECEIVE_LIST_MOVIES"


const receiveListMovie = (movieId, currentUser) => ({
    type: ADD_TO_LIST,
    movieId,
    currentUser
   
});

const deleteListMovie = (movieId, currentUser) => ({
    type: DELETE_FROM_LIST,
    movieId,
    currentUser
});


export const addToList = (movieId, currentUser) => dispatch => {
    return APIUtil.addToList(movieId)
        .then(movieId => dispatch(receiveListMovie(movieId, currentUser)))
};


export const deleteFromList = (movieId, currentUser) => dispatch => {
    return APIUtil.deleteFromList(movieId)
        .then(() => dispatch(deleteListMovie(movieId, currentUser)))
};
