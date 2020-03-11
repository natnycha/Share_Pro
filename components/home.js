import React, { Component } from 'react'
import Navbar from '../components/headbar'
import Credit from '../components/credit'
import Content from '../components/content'
import '../style/home.scss'
import Cookies from 'js-cookie'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    
    render(){
        (Cookies.get('token_u'))
        return (
            <div>
                <Navbar/>
                <Content/>
                <Credit/>
                </div>
        )       
    }
}
export default Home
