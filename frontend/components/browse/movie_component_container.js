import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import MovieComponent from './movie_component';
import { addToList, deleteFromList } from '../../actions/list_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToList: (movie, currentUser) => dispatch(addToList(movie, currentUser)),
        deleteFromList: (movieId, currentUser) => dispatch(deleteFromList(movieId, currentUser))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieComponent));