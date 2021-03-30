import { connect } from 'react-redux';


import NavbarComponent from './navbar_component';
import { logout } from '../../actions/session_actions';
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
        logout: () => dispatch(logout()),
        fetchAllGenres: () => dispatch(fetchAllGenres())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);