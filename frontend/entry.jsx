import React from "react";
import ReactDOM from "react-dom";

import Root from './components/root';
import { createStore } from "redux";

document.addEventListener("DOMContentLoaded", () => {
  const store = createStore();
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, rootEl);
});