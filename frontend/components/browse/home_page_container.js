import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import HomeComponent from './home_component';
import { fetchAllMovies, fetchMovie } from '../../actions/movie_actions';
import { fetchAllGenres } from '../../actions/genre_actions';


const mapStateToProps = ({ session, entities: { users, movies, genres } }) => {
    return {
        currentUser: users[session.id],
        movies: Object.values(movies),
        genres: Object.values(genres)

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllMovies: () => dispatch(fetchAllMovies()),
        fetchMovie: (movieId) => dispatch(fetchMovie(movieId)),
        fetchAllGenres: () => dispatch(fetchAllGenres())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));