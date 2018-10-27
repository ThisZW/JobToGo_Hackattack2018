import React, { Component } from 'react';
import './App.css';
import User from './components/User'
import Jobs from './components/Jobs'
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
            <Route path="/" exact component={User} />
            <Route path="/job-list" component={Jobs} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
