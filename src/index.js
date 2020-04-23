import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Board from "./components/Board";
import reducer from "./reducers/";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById("root")
);
