import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import SearchComponent from './search_component';

const mapStateToProps = ({ session, entities: { users, movies } }) => {
    return {
        currentUser: users[session.id],
        movies: Object.values(movies)
    };

};
const mapDispatchToProps = dispatch => {
    return {
        fetchAllMovies: () => dispatch(fetchAllMovies()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchComponent));

