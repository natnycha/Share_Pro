import React, { Component } from 'react'
import { Button, Form, Container, Col, Row } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'
import Notibar from '../components/notibar'
import notibar from '../style/notibar.scss'
import Home from '../components/home'
import axios from 'axios'
import Loginshop from '../components/loginshop'
import Forlogin from '../static/images/forlogin.jpg'
//import cookie from 'cookie'
//import { useCookies,setCookie,cookies,removeCookie } from 'react-cookie';
import Cookies from 'js-cookie'
class Login extends Component {
    constructor(props) {
        let loggedIn = false
        super(props)
        this.state = {
            email: '',
            password: '',
            loggedIn,


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
            email: this.state.email,
            password: this.state.password,

        }
        //let { email, password } = this.state
        //console.log(data)

        axios({
            method: 'POST',
            url: 'https://api.superder.me/client/v2.0.0/student/login',
            // xsrfCookieName: "XSRF-TOKEN",
            // xsrfHeaderName: "X-XSRF-TOKEN",
            data: {
                email: this.state.email,
                password: this.state.password,
                // token_user:this.state.token,
            }

        }).then(res => {
            // console.log(res);
            //console.log(res.data.payload.token)
            // console.log(data.data)
            //console.log(res.data.email)
            //const token_uu
            // const [cookies, setCookie, removeCookie] = useCookies(['token']);
            //setCookie(token,token_u, 100)
            //console.log(token_u)
            if (res.data.statusCode == 200) {
                console.log(res.data.payload.user.token)
                Cookies.set('token_u', res.data.payload.user.token)
                // alert(Cookies.get('token_u'))
                this.setState({
                    loggedIn: true
                })
            }
            //console.log(this.state.email,this.state.password)
            //  setCookie(token_user,xsrfHeaderName,['/login'])

        }).catch(e => {
            console.log('Login Fail')
            alert("wrong username or password");

        })
        //if (this.state.email === "a@a.com" && this.state.password === "a") {

        //return <Home email={this.state.email} />
        //}

    }




    render() {
        if (this.state.loggedIn) {

            return <Redirect to={'/home'} />
        }

        return (
            <div>
                <Notibar>
                    <div class="Row">
                        <div class="Column1">
                            Be Our Food Merchant partner
                        </div>
                        <div class="Column2" >
                            <Link to="/logins">
                                <button class="buttonjoin" href="/logins">Join us</button>
                            </Link>
                        </div>
                    </div>
                </Notibar>
                <div class="sharepro-header">Sharepro</div>


                <div>
                    <div className="body-login-left2">
                        <div className="bg">
                        
                            <p style={{paddingLeft: "10%", paddingTop: "8%" }}>Explore your favorite foods.</p>
                            <p style={{paddingLeft: "10%"}}>Start the conversation with matching people.</p>
                            <p style={{paddingLeft: "10%"}}>Meeting new friends !</p>
                        </div>
                        {/* <img src={Forlogin} alt="image login user"/> */}
                    </div>
                    <div className={'body-login'} >
                        <p>Welcome back,</p>
                        <h3>Login</h3><br />
                        <Form onSubmit={this.submitFrom} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} required />
                                <Button variant="link" href="/forgetpass" >Forgot your password?</Button>
                            </Form.Group>

                            <button className="buttonlogin" type="submit" block active >
                                Login </button>
                            <p ></p>
                            <Link to="/register"><button className="buttonsignup" type="button" block >
                                sign up
                    </button></Link>
                        </Form>
                    </div>
                </div>

            </div>

        )
    }
}
export default Login