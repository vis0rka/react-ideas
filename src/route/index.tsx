import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import RoboPage from "pages/RoboPage";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RoboPage} />
      </Switch>
    </Router>
  );
};
