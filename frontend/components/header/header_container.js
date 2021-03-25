import { connect } from 'react-redux';

import HeaderComponent from './header_container';
import { fetchMovie } from '../../actions/movie_actions';

const mapStateToProps = ({ entities: { movie } }) => {
    return {
        movie: Object.values(movie),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);