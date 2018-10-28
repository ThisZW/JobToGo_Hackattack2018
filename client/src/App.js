import React, { Component } from 'react';
import jobs from './components/jobs';
import signin from './components/signin';
import signup from './components/signup';

import './App.css'; 
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to JobToGo
        </header>
        <Router>
          <Switch>
            <Route path="/signup" component={signup} />
            <Route path="/" exact component={signin} />
            <Route path="/job-list" component={jobs} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
