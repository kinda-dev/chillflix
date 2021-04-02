import  { RECEIVE_GENRE, RECEIVE_GENRES } from '../actions/genre_actions';

const genresReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);

    switch(action.type) {
        case RECEIVE_GENRE:
            nextState[action.genre.id] = action.genre;
            return nextState[action.genre.id];
        case RECEIVE_GENRES:
            return action.genres;
        default:
            return oldState;    
    }
};

export default genresReducer;