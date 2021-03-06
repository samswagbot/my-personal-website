import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage, Experience, Talks, Djing, Code } from 'Pages/pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/experience">
        <Experience />
      </Route>
      <Route path="/talksandcampaigns">
        <Talks />
      </Route>
      <Route path="/djing">
        <Djing />
      </Route>
      <Route path="/code">
        <Code />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
