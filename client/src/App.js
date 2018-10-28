import React, { Component } from 'react';
import jobs from './components/jobs';
import Signin from './components/signin';
import Signup from './components/signup';
import MiniMap from './components/map';
import {geolocated} from 'react-geolocated';
import { Layout } from 'antd';
import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const { Header, Content } = Layout;

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
        {/*<Header className="App-header">
          Welcome to JobToGo
    </Header>*/}
        <Router>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/" exact component={Signin} />
            <Route path="/signin" component={Signin} />
            <div className="container-with-header">
              <Header className="App-header">
                Welcome to JobToGo
              </Header>
              <Route path="/jobs" component={jobs} />
              <Route path="/map" component={MiniMap} />
            </div>
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