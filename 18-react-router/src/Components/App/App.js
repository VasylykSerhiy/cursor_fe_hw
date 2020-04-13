import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

import routes from '../../routes'
import Navigation from './../Navigation'
import '../../reset.css'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__navigation">
          <Navigation />
        </div>

        <div className="app__pages">
          <Switch>
            {
              routes.map(route => (
                <Route
                  path={route.path}
                  exact={route.exact}
                  key={route.toString()}
                >
                  {route.component}
                </Route>
              ))
            }
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
