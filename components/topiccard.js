import React, { Component } from 'react'
import {
  Card, CardTitle, CardText, CardGroup, CardBody
  ,Container, Col, Row } from 'reactstrap'
import axios from 'axios'
import { LabelDetail } from 'semantic-ui-react';

export default class Topiccard extends Component {
  constructor(props) {

    super(props);

    this.state = {
      topicName: '',
      detail:''
    } 
}

  render() {
    let {detail,topicName,date,username}=this.props;
    console.log(detail,topicName)

    return (

      < a className='card' onClick={this.submitFrom}>
          
  <div >
      <div class="card">
          <div class="card-box" style={{fontSize:'27px',fontWeight:'bold'}}>
              {topicName}
          </div>
              <div class="card-body  ">
                  <blockquote class="blockquote mb-0">
                  <p>{detail}</p>
                  <footer class="blockquote-footer">{username} - <cite title="Source Title">{(new Date(date).toDateString())}</cite></footer>
                  </blockquote>
              </div>
      </div>
  </div>  
</a>
    )
  }
}
