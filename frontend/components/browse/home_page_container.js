import { connect } from 'react-redux';

import HomeComponent from './home_component';
import { logout } from '../../actions/session_actions';
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);