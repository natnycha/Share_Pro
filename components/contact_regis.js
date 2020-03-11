import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';

class Contact_regis extends Component {
    constructor(props) {
        super(props);
    }
    submitFrom =(e)=>{
        this.props.afterClick();
    }
    render() {
        let {value,onChange}=this.props;
        let {email,phoneNumber,facebook,instagram}=value;
        return (
            <Container>
                <Form onSubmit={this.submitFrom}>
                <Row>
                    <Col >
                        <div className='info-form1'>
                            <Form.Group controlId="exampleForm.ControlInput4">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="0000000000@kmitl.ac.th" value={email} onChange={onChange} required/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput5">
                                <Form.Label>TEL.</Form.Label>
                                <Form.Control type="text" name="phoneNumber" placeholder="0XX XXX XXXX" value={phoneNumber} onChange={onChange} required/>

                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput6">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control type="text" name='facebook' value={facebook} onChange={onChange}  />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput7">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control type="text" name='instagram' placeholder="@" value={instagram} onChange={onChange} />
                            </Form.Group>
                        </div>
                    </Col>
                    <Col >

                    </Col>
                </Row>
                <div className='next-button-regis'>
                    < button class="button_cont next-button-regis " class="example_a" type='type' >
                        Next Step </ button>
                </div>
                </Form>
            
            </Container>


        )

    }
}
export default Contact_regis