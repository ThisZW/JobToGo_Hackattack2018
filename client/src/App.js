import React, { Component } from 'react';
import './App.css';
import User from './components/User'
import Jobs from './components/Jobs'
import signup from './components/signup'
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
            <Route path="/signup" exact component={signup} />
            <Route path="/" exact component={signup} />
            <Route path="/job-list" component={Jobs} />
        </Router>
      </div>
    );
  }
}

export default App;
