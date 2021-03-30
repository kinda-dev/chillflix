import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import HeaderComponent from './header_component';
import { fetchMovie } from '../../actions/movie_actions';
const idx = Math.floor(Math.random() * (19 - 1)) + 1
const mapStateToProps = ( state ) => {
    return {
        movie: state.entities.movies[idx],
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchMovie: (movieId) => dispatch(fetchMovie(movieId)),

//     };
// };

export default withRouter(connect(mapStateToProps, null)(HeaderComponent));