import React, { Component } from 'react';
import {Row, Card} from 'antd';
import axios from 'axios';


const jobListUrl = 'https://jobtogo-504b3.firebaseio.com/job.json'
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
        return (
          <Card title={jobList[v].title}> 
            
          </Card>
        )
      })
    );
  }
}

export default jobs

//name, poster, detail, date, quote, 