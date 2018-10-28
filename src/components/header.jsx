
import React, {Component} from 'react';
import {Layout} from 'antd';
const { Header, Content } = Layout;

export default class CustHeader extends Component{
    render(){
        return (
            <Header className="App-header">
                Welcome to JobToGo
            </Header>
        )
    }
}