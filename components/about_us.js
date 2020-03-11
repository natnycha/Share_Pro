import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';
import '../style/regis.scss'
import Rabbit from "../static/images/rabbit.jpg"
import ResizeImage from 'react-resize-image'
import Img from 'react-fix-image-orientation'


class About_us extends Component {

    render() {

        return (

            <Container className='our-team-form'>
                <Row className='form-about-us'>
                        <Col className='fernji'>  </Col>
                        <Col className='text-about-us'> 
                        <Form.Text className="text-muted" >
                           <h2>Jiraporn Sornsumdang</h2>
                           <h4>60010150</h4> 
                           <p>Position : Frontend</p>
                           <p className='text-about-us1'> "The greatest lession I have learnt in the university is that I have nothing"</p>

                        </Form.Text>
                        </Col>
                    <Col className='pu'>  </Col>
                    <Col className='text-about-us'> 
                    <Form.Text className="text-muted">
                           <h2>Chawprapa charoenra</h2>
                           <h4>60010248</h4> 
                           <p>Position : Backend</p>
                           <p className='text-about-us1'> "Ctrl+C Ctrl+V"</p>

                        </Form.Text></Col>
                </Row>



                <Row className='form-about-us'>

                    <Col className='text-about-us'> 
                    <Card.Text className='bg-about-us'>
                         <h2>Nutcha Ketkla</h2>
                           <h4>60010281</h4> 
                           <p>Position : Backend</p>
                           <p className='text-about-us1'> " #Kao Mun Kai EveryDay "</p>
                    </Card.Text></Col>
                    <Col className='ice'>  </Col>

                    <Col className='text-about-us'> 
                    <Card.Text className='bg-about-us'>
                    <h2>Natnicha chantapat</h2>
                           <h4>60010300</h4> 
                           <p>Position : Ux/UI Designer </p>
                           <p className='text-about-us1'> "Don't give up on your dreams.Keep sleeping"</p>
                    </Card.Text></Col>
                    <Col className='preaw'>  </Col>
                </Row>
                
                <Row className='form-about-us'>
                    <Col className='fon'>  </Col>
                    <Col className='text-about-us'> 
                    <Card.Text className='bg-about-us'>
                    <h2>Thanaporn Apichotiku</h2>
                           <h4>60010391</h4> 
                           <p>Position : Frontend </p>
                           <p className='text-about-us1'> " Master has given Nfon pass project, Nfon is freeeeeee!"</p>
      </Card.Text></Col>
                    <Col className='ferntha'>  </Col>
                    <Col className='text-about-us'> 
                    <Card.Text className='bg-about-us'>
                    <h2>Tanathporn Jantar</h2>
                           <h4>60010418</h4> 
                           <p>Position : Backend </p>
                           <p className='text-about-us1'> " Everywhere is my runway "</p>
      </Card.Text></Col>
                </Row>
                
                
                    <Row className='form-about-us'>

                    <Col className='text-about-us'> 
                    <Card.Text className='bg-about-us'>
                    <h2>Thanjira Srira</h2>
                           <h4>60010450</h4> 
                           <p>Position : Backend </p>
                           <p className='text-about-us1'> " Toriumi kousuk "</p>
                    </Card.Text></Col>
                    <Col className='rabbit'>  </Col>

                    <Col className='text-about-us'> 
                    <Card.Text className='bg-about-us'>
                    <h2>Niparat Sillapanorased</h2>
                           <h4>60010544</h4> 
                           <p>Position : Backend </p>
                           <p className='text-about-us1'> " Not pregnant, just eatin' good."</p>
                    </Card.Text></Col>
                    <Col className='mint'>  </Col>
                    </Row>

            
            </Container>

        )
    }
}


export default About_us