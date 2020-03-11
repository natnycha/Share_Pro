import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FormText, Form } from 'react-bootstrap';
import '../style/regis.scss';

class Mbti_regis extends Component {
    submitFrom =(e)=>{
        this.props.afterClick();
    }
    submitFromNon=(e)=>{
        this.props.afterClickNon();
    }
    render() {
        let {onChange,value}=this.props;
        let {mbti}=value;
        return (

            <Container className='info-form3-mbti'>

                <div className='text-mbti2'>
                    <FormText className='text-mbti'>
                        <strong> MBTI </strong>(Myers Briggs Type Incator)
                </FormText>
                    <p>
                        Have you ever taken an MBTI test? If you haven't done this then <a className='info-mbti' href="https://www.16personalities.com/free-personality-test">  click here.</a>
                    </p>
                </div>
                <Row>
                    <Col className='info-form3'>
                        <div >

                            <Form.Group controlId="exampleForm.ControlInput8">
                                <Form.Label>What type did you get?</Form.Label>
                                <Form.Control type="text" name="mbti" value={mbti} onChange={onChange} />
                            </Form.Group>
                            <div className='next-button-mbti'>
                                < a class="button_cont " class="example_a" onClick={this.submitFrom}>
                                    Submit</a>
                            </div>
                            <div className='divider'> 
                                {/* <div className='line-or'>
                                </div> */}
                                <hr className='line-or'/>
                                <div className='or-text'>or</div>
                            </div>
                            <div className='next-button-mbti'>
                                < a class="button_cont " class="example_b" onClick={this.submitFromNon}>
                                    Maybe Later</a>
                            </div>
                            <FormText>
                                Skip this you will meet all type of people and you can change this any time
                   </FormText>
                        </div>
                    </Col>
                    <Col >

                        <p className='info-mbti1'>
                            <strong>MBTI</strong> is  personality inventory is to make the theory of psychological types described by C. G. Jung understandable and useful in people's lives.
                            The essence of the theory is that much seemingly random variation in the behavior is actually quite orderly and consistent,
                            being due to basic differences in the ways individuals prefer to use their perception and judgment.
                        </p>

                    </Col>
                </Row>


            </Container>

        )

    }
}
export default Mbti_regis