import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';
import '../style/regis.scss';
import Joingroup from './privacy-policy'
import Card_topic from './ card-topic'


class Topic_show extends Component {

    constructor(props) {

        super(props);

        this.state = {
           

        }
       
    }
   
   
    render() {
        let {detail,topicName,date,username}=this.props;
        return (


            <div className={'shop-form'}>
             
              <Card_topic detail={detail} topicName={topicName} date={date} username={username}/>
            </div>

        )
    }
}



export default Topic_show