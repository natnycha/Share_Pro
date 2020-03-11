import React, { Component } from 'react'
import chat from '../style/chat.scss';
import { Container, Row,Col } from 'react-bootstrap';

const DUMMY_DATA = [
   {
      senderId: 'Nfon',
      text: 'pic'
   },
   {
      senderId: 'T',
      text: 'pic'
   },
   {
      senderId: 'Mint',
      text: 'pic '
   },
   {
      senderId: 'Nfon',
      text: 'pic'
   },
   {
      senderId: 'T',
      text: 'pic'
   },
   {
      senderId: 'Mint',
      text: 'pic '
   }
]

export default class Showmember extends Component {
   render() {
      return (
         
         <div>
            <Container>
               <Row>
            {
               DUMMY_DATA.map((message, index) => {
                  return (
                     <div key={index}>
                        
                        <Col>
                        <div className="space-each-mem">
                        <div className ="member">{message.text}</div>
                        <div className="space-between">{message.senderId}</div>
                        </div>
                        </Col>
                        
                     </div>
                  )
               })
            }
            </Row>
            </Container>
         </div>
      )
   }
}
