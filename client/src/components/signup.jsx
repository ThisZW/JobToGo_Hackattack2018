import {Button, Card, Icon, Input, Radio, message} from 'antd';
import React, { Component } from 'react';
  
export default class signup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: null,
        name: null,
        password: null,
        //type: null,
        loading: false
      };
      this.signup = this.signup.bind(this);
    }
  
    componentDidMount() {
      const { match } = this.props;
      this.setState({
        //type: match.params.type,
      });
    }
  
    signup() {
      this.setState({ loading: true });
      const {
        name, password, email,
      } = this.state;
      const reqData = {
        name,
        password,
        email,
      };
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
    }
  
    render() {
      const {
        name, loading
      } = this.state;
      return (
        <div className="signup">
          <h1 className="title">#</h1>
          <Card
            className="signup-card"
            title="Sign Up"
          >
            <div>
              <Radio.Group
                buttonStyle="solid"
                className="user-type-radio"
              >
                <Radio.Button value="signin">Sign in</Radio.Button>
                <Radio.Button value="signup">Sign Up</Radio.Button>
              </Radio.Group>
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
