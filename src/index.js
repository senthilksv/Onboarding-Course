import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./onboarding/home/home";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import CourseList from "./onboarding/course-list/course-list";
import { BrowserRouter as Router, Route } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/couserList" component={CourseList} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
