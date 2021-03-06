import { connect } from 'react-redux';
import React from 'react';
import { login, resetErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
