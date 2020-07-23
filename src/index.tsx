import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, ProjectPage } from "./pages";
import * as serviceWorker from "./serviceWorker";
import { Topbar } from "./components";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "./index.css";

ReactDOM.render(
  <>
    {/* <CssBaseline /> */}
    <Topbar />
    <br />
    <Container maxWidth="lg">
      <Router>
        <Switch>
          <Route path="/project">
            <ProjectPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Container>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
