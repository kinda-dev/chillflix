import  { RECEIVE_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions';

const moviesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);

    switch(action.type) {
        case RECEIVE_MOVIE:
            nextState[action.movie.id] = action.movie;
            console.table(nextState[action.movie.id])
            return nextState[action.movie.id];
        case RECEIVE_MOVIES:
            return action.movies;
        default:
            return oldState;    
    }
};

export default moviesReducer;
