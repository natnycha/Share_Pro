import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom'
class FormFoget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            answer: '',
            redirect: false
        }
        
    }
    onChange=(e) => {
        console.log('set state')
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col >
                    <Form onSubmit={this.setRedirect}>
                        <div className='info-form1'>
                            {this.renderRedirect()}
                            <Form.Group controlId="emailInputs">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="0000000000@kmitl.ac.th" value={this.state.email} onChange={this.onChange} required/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Security question</Form.Label>
                                <Form.Control as="select">
                                    <option>What was the name of your first pet?</option>
                                    <option>What city were you born in?</option>
                                    <option>What is your mother’s maiden name? </option>
                                    <option>What is the name of your first school?</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Answer</Form.Label>
                                <Form.Control as="textarea" name="answer" rows="1" value={this.state.answer} onChange={this.onChange} required />
                                <Form.Text className="text-muted">
                                    Uppercase and lowercase affect to your answer.
                                </Form.Text>
                            </Form.Group>
                            
                            <div className='submit-button-foget'>
                                < button class="button_cont" class="example_a" type="submit" block active>
                                    SUBMIT</ button>
                            </div>
                        </div>
                        </Form>

                    </Col>
                    <Col >

                    </Col>

                </Row>


            </Container>


        )

    }
}
export default FormFoget