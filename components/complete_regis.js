import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FormText, Form } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom'
import '../style/regis.scss';

class Complete_regis extends Component {
    render() {
      let {value}=this.props
      let {pageOne}=value
      let title=pageOne.username
        return (
           
            <Container className='info-form3-mbti'>
                <div>
                <div className='text-mbti2'>
                <FormText className='text-complete'>
                     <strong> SUCCESS ! </strong>   
                </FormText>
                <br></br>
                <FormText className='text-complete1'>
                     <strong> HELLO #{title} </strong>   
                </FormText>
                </div>
                <div className='submit-complete'>
                <Link to="/"><a variant="primary" className='btn-create-topic' onClick={this.submit}>Let Start !!</a></Link>
                </div>
                </div>
            <Row>
              <Col className='info-form3'>
            </Col>
        <Col > 
        
        </Col>
      </Row>
      </Container>
        
        )
    
    }
    }
    export default Complete_regis