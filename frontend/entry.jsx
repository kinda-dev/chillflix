import React from "react";
import ReactDOM from "react-dom";

import Root from './components/root';
import { createStore } from "redux";

import {login, signup, logout} from '../frontend/util/session_api_util'
document.addEventListener("DOMContentLoaded", () => {
  const store = createStore();
  const rootEl = document.getElementById("root");

  window.login = login;
  window.signup = signup;
  window.logout = logout;
  ReactDOM.render(<Root store={store}/>, rootEl);
  // ReactDOM.render(<h1>you are here</h1>, rootEl);
});