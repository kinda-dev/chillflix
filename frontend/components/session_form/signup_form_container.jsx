import { connect } from 'react-redux';
import React from 'react';
import { signup, resetErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);