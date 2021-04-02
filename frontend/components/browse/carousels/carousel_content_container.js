import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import CarouselContent from './carousel_content';
import { fetchGenre, fetchAllGenres } from '../../../actions/genre_actions';
import { fetchAllMovies } from '../../../actions/movie_actions'

const mapStateToProps = ( state ) => {
    return {
        movies: Object.values(state.entities.movies),
        genres: Object.values(state.entities.genres)


    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGenre: (genreId) => dispatch(fetchGenre(genreId)),
        fetchAllGenres: () => dispatch(fetchAllGenres()),
        fetchAllMovies: () => dispatch(fetchAllMovies())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarouselContent));