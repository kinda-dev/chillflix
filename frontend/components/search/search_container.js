import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import SearchComponent from './search_component';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
    };
};

export default withRouter(connect(mapStateToProps, null)(SearchComponent));