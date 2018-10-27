import React, { Component } from 'react';
import {Button, Col, Radio} from 'antd'
import {signup} from './component'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class User extends Component{

  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <div className="user-nav">
        <Router>
          <Switch>
            <Route path="/signin" component={null}/>
            <Route path="/signup" component={signup}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default User;