import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { fetchAllMovies } from '../../actions/movie_actions';

import myListComponent from './my_list_component';

const mapStateToProps = (state) => {
    // debugger
    return {
        movies: Object.values(state.entities.movies),
        userList: state.entities.users[state.session.id].myListMovieIds
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllMovies: () => dispatch(fetchAllMovies()),

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(myListComponent));