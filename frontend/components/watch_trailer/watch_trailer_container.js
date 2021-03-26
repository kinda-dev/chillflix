import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import WatchTrailer from './watch_trailer_component';
import { fetchMovie } from '../../actions/movie_actions';


const mapStateToProps = ( state ) => {
    return {
        movie: state.entities.movies,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WatchTrailer));