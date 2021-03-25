import  { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {ADD_TO_LIST, DELETE_FROM_LIST} from '../actions/list_actions';


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    const nextState = Object.assign({}, oldState);

    // debugger
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;

        case DELETE_FROM_LIST:
            let currentUser = action.currentUser;
            let idx = currentUser.myListMovieIds.indexOf(action.movie.id);
            delete currentUser.myListMovieIds[idx];
            return Object.assign({}, state, {[currentUser.id]: currentUser});

        case ADD_TO_LIST:
            let currentUser2 = action.currentUser;
            currentUser2.myListMovieIds.push(action.movie.id);
            return Object.assign({}, state, {[currentUser2.id]: currentUser2});
    
        
        default:
            return oldState;
    }
};

export default usersReducer;