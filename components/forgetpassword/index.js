import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';
import FormFoget from './form_foget'
import Navbar from '../navbar'
import '../../style/fogetpass.scss'


class FogetPassword extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div class="sharepro-header">Sharepro</div>
                <div className='box-foget'>
                    <br></br>
                    <br></br>


                    <Form.Text className='text-head '>
                        Foget Password
                 </Form.Text>
                    <FormFoget />
                </div>
            </div>
        )

    }
}
export default FogetPassword;