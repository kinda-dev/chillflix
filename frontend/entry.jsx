import React from "react";
import ReactDOM from "react-dom";

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById("root");

  // TEST START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TEST END

  ReactDOM.render(<Root store={store}/>, rootEl);
  // ReactDOM.render(<h1>you are here</h1>, rootEl);
});