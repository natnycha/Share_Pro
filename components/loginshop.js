import React, { Component } from 'react'
import { Button, Form, Container, Col, Row } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'
import Notibar from '../components/notibar'
import Home from '../components/home'
import axios from 'axios'
import Cookies from 'js-cookie'

class Loginshop extends Component {
    constructor(props) {
        let loggedIn = false
        super(props)
        this.state = {
            email:'',
            password: '',
            loggedIn
        }
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
        let data = {
            email:this.state.email,
            password:this.state.password
        }
        //let { email, password } = this.state
        console.log(data)
    axios({
        method:'POST',
        url:'https://api.superder.me/client/v2.0.0/shop/login',
        data:{
            email: this.state.email,
            password:this.state.password
        }
        
    }).then(res=>{
        console.log(res);
        console.log(res.data.payload)
        console.log(data.data)
        if(res.data.statusCode==200){
            console.log(res.data.payload.user.token)
            Cookies.set('token_u', res.data.payload.user.token)
           // alert(Cookies.get('token_u'))
        this.setState({
            loggedIn: true    
        }) }
        console.log(this.state.email,this.state.password)

    }).catch(e=>{
        console.log('Login Fail')
        alert("wrong username or password");
        
    })
        //if (this.state.email === "a@a.com" && this.state.password === "a") {
           
            //return <Home email={this.state.email} />
        //}
            
     }

  
    

    render() {
         if (this.state.loggedIn) {

             return <Redirect to={'/homeshop'} />
        }

        return (
            <div>
                <div class="sharepro-header">Sharepro</div>
                <div>
                    <div className="body-login-left">
                        <h1 className="text-green-h1">Food Merchant partner</h1>
                        <h4 className="text-green">Let's start manage your shop and</h4>
                        <h4 className="text-green">Sharing a new promoption!</h4>
                    </div>
                    <div className={'body-login'} >
                        <h2 className="text-green">Login</h2><br />
                        <Form onSubmit={this.submitFrom} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} required />                            </Form.Group>
                            
                            <button class="buttonloginshop" type="submit" block active >
                                Login </button>
                            <p ></p>
                            <Link to="/regis-shop"><button class="buttonsignupshop" type="button" block >
                                sign up
                    </button></Link>
                        </Form>
                    </div>
                </div>

            </div>

        )
    }
}
export default Loginshop