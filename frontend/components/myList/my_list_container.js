import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { fetchAllMovies } from '../../actions/movie_actions';
import { fetchGenre, fetchAllGenres } from '../../actions/genre_actions';


import myListComponent from './my_list_component';

const mapStateToProps = ({ session, entities: { users, movies, genres } }) => {
    // debugger
    return {
        currentUser: users[session.id],
        movies: Object.values(movies),
        genre: genres
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllMovies: () => dispatch(fetchAllMovies()),
        fetchGenre: (genreId) => dispatch(fetchGenre(genreId)),


    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(myListComponent));