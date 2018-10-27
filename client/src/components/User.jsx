import React, { Component } from 'react';
import {Button, Col, Radio} from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class User extends Component{

  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <div className="user-nav">
        <a href="/signin">
          <Button value="signin">SignIn</Button> 
        </a>
        <a href="/signup">
          <Button value="signup">SignUp</Button>
        </a>
        <Router>
          <Switch>
            <Route path="/signin" component={null}/>
            <Route path="/signup" component={null}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default User;