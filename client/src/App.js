import React, { Component } from 'react';
import jobs from './components/jobs';
import Signin from './components/signin';
import Signup from './components/signup';
import MiniMap from './components/map';
import {geolocated} from 'react-geolocated';
import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {

  componentDidMount = () => {
    if (!this.props.isGeolocationAvailable)
    console.log('does not support!');
    else if (!this.props.isGeolocationEnabled)
      console.log('user rejected!');
    else {
      if(!this.props.positionError){
        console.log(this.props)
        console.log(this.props.coords);
      }
      else
        console.log(this.props.positionError);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to JobToGo!
        </header>
        <Router>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/" exact component={Signin} />
            <Route path="/signin" component={Signin} />
            <Route path="/jobs" component={jobs} />
            <Route path="/map" component={MiniMap} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: true,
	},
	userDecisionTimeout: 5000,
})(App);