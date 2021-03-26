import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import HeaderComponent from './header_component';
import { fetchMovie } from '../../actions/movie_actions';

const mapStateToProps = ( state ) => {
    let idx = Math.floor(Math.random() * 10 + 1)
    return {
        movie: state.entities.movies[idx],
    };
};

export default withRouter(connect(mapStateToProps, null)(HeaderComponent));