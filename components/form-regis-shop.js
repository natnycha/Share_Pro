import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';
import '../style/regis.scss'
import Joingroup from './privacy-policy'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

const format = 'HH:mm';

class Formregis_shop extends Component {

    constructor(props) {

        super(props);

        this.state = {
            password: '',
            username: '',
            email: '',
            shopName: '',
            openHours: '',
            closeHours: '',
            phoneNumber: '',
            facebook: '',
            instagram: '',
            webUrl: '',
            description: '',
            address: '',
            type:'',
            submit: false


        }
        this.submit = this.submit.bind(this);
    }
    onChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }
    async submit(e){
        e.preventDefault()

        let data = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            shopName: this.state.shopName,
            openHours: this.state.openHours + '-' + this.state.closeHours,
            //closeHours: this.state.closeHours,
            facebook: this.state.facebook,
            instagram: this.state.instagram, 
            webUrl: this.state.webUrl,
            description: this.state.description,
            address: this.state.address,



        }

        console.log('sadqwe', data);

        try {
            const res = await axios({
                method: 'POST',
                url: 'https://api.superder.me/client/v2.0.0/shop/register',
                data: {
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                    phoneNumber: this.state.phoneNumber,
                    shopName: this.state.shopName,
                    openHours: this.state.openHours + '-' + this.state.closeHours,
                    //closeHours: this.state.closeHours,
                    facebook: this.state.facebook,
                    instagram: this.state.instagram,
                    webUrl: this.state.webUrl,
                    description: this.state.description,
                    address: this.state.address,
                    shopType: this.state.shopType
                }

            })
            
            console.log(res);
            this.setState({
                submit:true
            })
        } catch (e) {
            console.log(e);
        }

    }
    handleDateChange = date => {
        this.setState({
            data: new Date()
        })
    };
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
        if (this.state.submit) {

            return <Redirect to={'/logins'} />
        }
        return (

            <Form onSubmit={this.submit}>
                <div className={'shop-form'}>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            Shop name
                </Form.Label>
                        <Col sm="6" className='text1'>
                            <Form.Control type="text" placeholder="Shop name" name="shopName" value={this.state.shopName} onChange={this.onChange} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            Username
                </Form.Label>
                        <Col sm="6" className='text2'>
                            <Form.Control type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            Password
                </Form.Label>
                        <Col sm="6" className='text3'>
                            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            Email address
                </Form.Label>
                        <Col sm="6" className='text4'>
                            <Form.Control type="email" placeholder="0000000000@kmitl.ac.th" name="email" value={this.state.email} onChange={this.onChange} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            TEL.
                </Form.Label>
                        <Col sm="6" className='text5'>
                            <Form.Control type="text" placeholder="0XX XXX XXXX" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            Open - Close
                </Form.Label>
                        <Row >
                            <Col sm="3" className='time-picker-1' >
                                <Form.Control type="text" placeholder="00.00" name="openHours" value={this.state.openHours} onChange={this.onChange} required />
                            </Col>
                            <Col sm="3" >
                                <Form.Control type="text" placeholder="00.00" name="closeHours" value={this.state.closeHours} onChange={this.onChange} required />
                            </Col>
                        </Row>
                    </Form.Group>


                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            More Information
                </Form.Label>
                        <Col sm="7" className='text3'>
                            <Form.Control as="textarea" rows="3" placeholder="up to 200 characters" name="description" value={this.state.description} onChange={this.onChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextAddress">
                        <Form.Label column sm="1.5">
                            Address
                </Form.Label>
                        <Col sm="7" className='text8'>
                            <Form.Control as="textarea" rows="2" name="address" value={this.state.address} onChange={this.onChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            Type of Food
                </Form.Label>
                        <Col sm="6" className='text7'>
                            <Form.Control as="select" name="type" value={this.state.type} onChange={this.onChange}>
                                <option value="Thai food">Thai food</option>
                                <option value="Fast food">Fast food</option>
                                <option value="Japanese food">Japanese food</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            Facebook
                </Form.Label>
                        <Col sm="8" className='text6'>
                            <Form.Control type="text" name="facebook" value={this.state.facebook} onChange={this.onChange} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            Web URL
                </Form.Label>
                        <Col sm="8" className='text3'>
                            <Form.Control type="text" name="webUrl" value={this.state.webUrl} onChange={this.onChange} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="1.5">
                            Instagram
                </Form.Label>
                        <Col sm="8" className='text2'>
                            <Form.Control type="text" name="instagram" value={this.state.instagram} onChange={this.onChange} required />
                        </Col>
                        < botton onClick={this.submit} className="button_cont example_c"  block active>
                        SUBMIT</ botton>
                    </Form.Group>
                   

                </div>
            </Form>
        )
    }
}


export default Formregis_shop