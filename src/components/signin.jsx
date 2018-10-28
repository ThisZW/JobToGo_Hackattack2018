import {Button, Card, Icon, Input, message} from 'antd';
import React, { PureComponent } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import cookie from 'react-cookies'
  
  export default class Signin extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        loading: false,
      };
      this.signin = this.signin.bind(this);
    }
  
    signin() {
      const { email, password } = this.state;
      if (email === '' || password === '') {
        message.error('Looks like you\'re missing something.');
        return;
      }
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          if (user) {
            window.location = '/jobs';
            cookie.save('userEmail', email, { path: '/' });  // user cookie.load('userEmail') later
          }
        })
        .catch((err) => {
          message.error(err.message);
        });
    }
      
    render() {
      const { email, password, loading } = this.state;
      return (
        <div className="signin">
          <Card
            className="signin-card"
            title="Sign In"
          >
            <div>
              <Input
                required
                size="large"
                placeholder="E-Mail"
                prefix={<Icon type="mail" />}
                style={{ marginTop: 10 }}
                type="email"
                value={email}
                onChange={(e) => { this.setState({ email: e.target.value }); }}
              />
              <Input
                required
                size="large"
                placeholder="Password"
                prefix={<Icon type="ellipsis" />}
                style={{ marginTop: 10 }}
                type="password"
                value={password}
                onChange={(e) => { this.setState({ password: e.target.value }); }}
              />
              <Button icon="check-circle" size="large" block style={{ marginTop: 10 }} onClick={this.signin} loading={loading} type="primary">
                <p style={{ margin: 0, display: 'inline', marginLeft: 10 }}>Sign In</p>
              </Button>
              <Button size="large" block style={{ marginTop: 10 }} href="/signup">
                <p style={{ margin: 0, display: 'inline' }}>Don&#39;t have an account? Sign Up.</p>
              </Button>
            </div>
          </Card>
        </div>
      );
    }
  }
  