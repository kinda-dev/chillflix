import { connect } from 'react-redux';

import RowComponent from './row_component';
import { fetchAllMovies, fetchMovie } from '../../actions/movie_actions';

const mapStateToProps = ({ session, entities: { users, movies } }) => {
    return {
        currentUser: users[session.id],
        movies: Object.values(movies),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchAllMovies: () => dispatch(fetchAllMovies()),
        fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RowComponent);