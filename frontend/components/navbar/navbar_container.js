import { connect } from 'react-redux';


import NavbarComponent from './navbar_component';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(null, mapDispatchToProps)(NavbarComponent);