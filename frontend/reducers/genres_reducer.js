import  { RECEIVE_GENRE } from '../actions/genre_actions';

const genresReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);

    switch(action.type) {
        case RECEIVE_GENRE:
            nextState[action.genre.id] = action.genre;
            console.table(nextState[action.genre.id])
            return nextState[action.genre.id];
        default:
            return oldState;    
    }
};

export default genresReducer;