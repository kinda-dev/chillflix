import React from "react";
import ReactDOM from "react-dom";

import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';
import { fetchAllMovies, fetchMovie } from './actions/movie_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const rootEl = document.getElementById("root");

  // TEST START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
    window.fetchAllMovies = fetchAllMovies;
    window.fetchMovie = fetchMovie;
  // TEST END

  ReactDOM.render(<Root store={store}/>, rootEl);
  // ReactDOM.render(<h1>you are here</h1>, rootEl);
});