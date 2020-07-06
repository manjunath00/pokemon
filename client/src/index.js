import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import App from "./App";
import "./sass/index.scss";
import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
