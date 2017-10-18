import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Main
import Main from './views/Main';
// 404
import NotFound from './views/404';

const Routes = () => (
  <Router history={browserHistory}>
    <Route>
      <Route path="/dashboard">
        <IndexRoute component={Main} />
        <Route path="*" component={NotFound} />
      </Route>
    </Route>
  </Router>
);

export default Routes;
