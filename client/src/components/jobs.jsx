import React, { Component } from 'react';
import {Row, Card, Button, Icon} from 'antd';
import MiniMap from './map';
import axios from 'axios';
import Animate from 'rc-animate';


const jobListUrl = 'https://jobtogo-504b3.firebaseio.com/job.json'

const listStyles = {
  row: {
    margin : "1rem",
  },
  card: {
    borderColor: "black",
    boxShadow: "2px 4px 2px 1px rgba(44,44,44, 0.3)"
  }
}
class jobs extends Component{
  
  constructor(){
    super()
    this.state = {
      jobList: '',
    }
  }
//?orderBy="employer"&equalTO=false
  componentWillMount = () =>{
    axios.get(jobListUrl)
    .then( res => {
      this.setState({
        jobList: res.data
      })
      console.log(this.state.jobList)
    })
  }

  render(){
    const jobList = this.state.jobList;
    return(
      Object.keys(jobList).map((v, i) => {
        let reqs;
        jobList[v]['requirement'] && 
        (reqs = jobList[v].requirement.map( val=>{
          return val;
        }))
        return (
          <Row style={listStyles.row}>
            <Card title={jobList[v].title} style={listStyles.card}> 
              You will get paid by: $<b>{jobList[v].pay}</b><br/>
              Posted by: <b>{jobList[v].employer}</b><br/>
              {jobList[v].detail}<br/>
              Requirements:&nbsp;
              {reqs && reqs.join(', ')}
              <MapWrapper destCoords={jobList[v].location}/>
            </Card>

          </Row>
        )
      })
    );
  }
}

class MapWrapper extends Component{
  constructor() {
    super(...arguments);
    this.state = {
      show: false,
    };
    [
      'onClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }
  
  onClick(){
    this.setState({
      show: !this.state.show,
    });
  }
  
  render(){
    return (
      <div className="code-box-demo-wrapper">
        <p className="buttons">
          <Button style={{marginTop:10}} onClick={this.onClick}><Icon type="down" theme="outlined" /></Button>
        </p>
        <Animate
          transitionName="fade"
          transitionAppear
        >
          {this.state.show ? 
            <MiniMap key="1"/> : null}
        </Animate>
      </div>
    );
  }
}

export default jobs

//name, poster, detail, date, quote, 