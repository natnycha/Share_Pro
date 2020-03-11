import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';
import '../style/regis.scss';
import Privacy from './privacy-policy'


class Formregis extends Component {
    constructor(props) {
        let loggedIn = false
        super(props)
        this.onChange = this.onChange.bind(this)
        this.submitFrom = this.submitFrom.bind(this)
    }

    onChange(e) {
        console.log('set state')
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitFrom(e) {
        console.log('submit')
        e.preventDefault()
        this.props.afterClick()
        /*if (email === "a@a.com" && password === "a")
            this.setState({
                loggedIn: true
  
            })*/
    }

    render() {
        let { value, onChange } = this.props
        let { username, password, fristname, lastname, answer, age,gender } = value;
        console.log(value);
        return (
            <Container>
                <Form onSubmit={this.submitFrom}>
                    <Row>
                        <Col className={'info-form1'}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" placeholder="Username" value={username} onChange={onChange} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="***********" value={password} onChange={onChange} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicFirstname">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" name="fristname" placeholder="First Name" value={fristname} onChange={onChange} required />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Security question</Form.Label>
                                <Form.Control as="select">
                                    <option>What was the name of your first pet? </option>
                                    <option>What city were you born in?</option>
                                    <option>What is your mother’s maiden name? </option>
                                    <option>What is the name of your first school?</option>
                                </Form.Control>
                            </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicAge">
                                            <Form.Label>Age</Form.Label>
                                            <Form.Control type="text" name="age"  value={age} onChange={onChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                            <Form.Group controlId="exampleForm.ControlSelect2">
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control as="select" name="gender" value={gender} onChange={onChange}>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </Form.Control>
                                            </Form.Group>
                                    </Col>
                                   
                                </Row>
                          

                        </Col>
                        <Col className={'info-form2'}>

                            <br></br>


                            <Form.Text className="text-muted">
                                up to 15 characters without special charecter such as @#$%*
                            </Form.Text>
                            <br></br>
                            <br></br>


                            <Form.Text className="text-muted ">
                                1-10 characters without special character such as @#$%*
                             </Form.Text>
                            <br></br>

                            <Form.Group controlId="formBasicLastname" class="lastname">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={onChange} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicAnswer">
                                <Form.Label>Answer</Form.Label>
                                <Form.Control as="textarea" name="answer" rows="1" value={answer} onChange={onChange} required />
                                <Form.Text className="text-muted">
                                    Uppercase and lowercase affect to your answer.
                                </Form.Text>
                            </Form.Group>

                        </Col>
                    </Row>
                    <div className='checkbox-regis'>
        
                <Form.Group  as={Row} controlId="formBasicCheckbox" >  
                        <Form.Check type="checkbox" required/>
                    <Col sm="10" >
                    <Privacy/>
                    </Col>
                </Form.Group>


                    </div>
                    <div className='next-button-regis'>
                        < button class="button_cont" class="example_a" type="submit" block active>
                            SUBMIT</ button>
                    </div> 

                </Form>
            </Container>

        )
    }
}


export default Formregis