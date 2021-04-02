import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import WatchTrailer from './watch_trailer_component';
import { fetchMovie } from '../../actions/movie_actions';


const mapStateToProps = ( state, ownProps ) => {
    // debugger
    return {
        movieId: parseInt(ownProps.match.params.videoId),
        movie: state.entities.movies,
        myList: state.entities.users[state.session.id].myListMovieIds
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WatchTrailer));