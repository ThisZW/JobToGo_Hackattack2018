import React, { Component } from 'react';
import jobs from './components/jobs';
import signin from './components/signin';
import signup from './components/signup';
import map from './components/map'

import './App.css'; 
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to JobToGo
        </header>
        <Router>
          <Switch>
            <Route path="/signin" exact component={signin} />
            <Route path="/" exact component={signup} />
            <Route path="/signup" exact component={signup} />
            <Route path="/job-list" component={jobs} />
            <Route path="/map" component={map} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
