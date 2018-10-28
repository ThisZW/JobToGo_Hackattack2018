import {Button, Card, Icon, Input, message} from 'antd';
import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class signup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: null,
        name: null,
        password: null,
        loading: false
      };
      this.signup = this.signup.bind(this);
    }
  
    signup() {
      this.setState({ loading: true });
      const {
        name, password, email,
      } = this.state;
      if (!name || !password || !email) {
        message.error('Looks like you\'re missing something.');
        this.setState({ loading: false });
        return;
      }
      if (name === '' || password === '' || email === '') {
        message.error('Looks like you\'re missing something.');
        this.setState({ loading: false });
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorMessage = error.message;
        console.log(errorMessage);
      }).then((user) => {
          if (user) {
            message.success('Signed Up. Redirecting..');
            window.location = '/jobs';
          }
          else {
          this.setState({ loading: false });
        }
      }).catch((err) => {
        console.log('Signup Err', err);
        this.setState({ loading: false });
      });
    }
  
    render() {
      const {
        name, loading
      } = this.state;
      return (
        <div className="signup">
          <Card
            className="signup-card"
            title="Sign Up"
          >
            <div>
              <Input
                size="large"
                placeholder="Full Name"
                prefix={<Icon type="user" />}
                style={{ marginTop: 10 }}
                value={name}
                onChange={(e) => { this.setState({ name: e.target.value }); }}
              />
              <Input
                size="large"
                placeholder="E-Mail"
                prefix={<Icon type="mail" />}
                style={{ marginTop: 10 }}
                type="email"
                onChange={(e) => { this.setState({ email: e.target.value }); }}
              />
              <Input
                size="large"
                placeholder="Password"
                prefix={<Icon type="ellipsis" />}
                style={{ marginTop: 10 }}
                type="password"
                onChange={(e) => { this.setState({ password: e.target.value }); }}
              />
              <Button icon="check-circle" size="large" block style={{ marginTop: 10 }} onClick={this.signup} loading={loading} type="primary">
                <p style={{ margin: 0, display: 'inline', marginLeft: 10 }}>Sign Up</p>
              </Button>
            </div>
          </Card>
        </div>
      );
    }
  }
