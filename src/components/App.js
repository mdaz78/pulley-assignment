import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../page/LandingPage';
import DocumentTypePage from '../page/DocumentTypePage';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/document' exact component={DocumentTypePage} />
        </Switch>
      </div>
    </Router>
  );
}
