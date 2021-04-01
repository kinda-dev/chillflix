import { connect } from 'react-redux';


import NavbarComponent from './navbar_component';
import { logout } from '../../actions/session_actions';
import { fetchGenre, fetchAllGenres } from '../../actions/genre_actions';
import { fetchAllMovies } from '../../actions/movie_actions';

const mapStateToProps = ({ session, entities: { users, movies, genres } }) => {
    return {
        currentUser: users[session.id],
        movies: Object.values(movies),
        genre: Object.values(genres)

    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchAllGenres: () => dispatch(fetchAllGenres()),
        fetchGenre: (genreId) => dispatch(fetchGenre(genreId)),
        fetchAllMovies: () => dispatch(fetchAllMovies())



    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);