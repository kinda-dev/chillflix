import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { fetchGenre, fetchAllGenres } from '../../../actions/genre_actions';

import genreComponent from './genre_component';

const mapStateToProps = ({ session, entities: { users, movies, genres } }, ownProps) => {
    // debugger
    return {
        currentUser: users[session.id],
        genre: genres,
        genreId: parseInt(ownProps.match.params.genreId)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGenre: (genreId) => dispatch(fetchGenre(genreId)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(genreComponent));