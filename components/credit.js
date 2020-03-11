import React, { Component } from 'react'
import '../style/home.scss';
import { Icon,Button } from 'antd';

class Credit extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
           <div>
               <div className="contactcradit">
               <div class="row">
                <div class="column">
                <h1>SharePro</h1>
                <h3>Power by Superderplus, BKK</h3>
                </div>
                <div class="column">
                <p></p>
                <p></p>
                </div>
  
                <div class="column">
                <h2>FOLLOW US</h2>
                <a href="https://www.facebook.com/">Facebook</a><br/>
                <a href="https://www.youtube.com/
">Youtube</a><br/>
                <a href="https://www.instagram.com/">Instagram </a>
                </div>
  
                <div class="column">
                <h2>ABOUT US</h2>
                <a href="/privacy">About SharePro</a><br/>
                <a href="/our-team">Our Team</a><br/>
                <a href="/privacy">Privacy Policy </a>
                </div>
                </div>
            </div>
            <div className="cd" >
                <p className="cd">Copyright © 2019 SuperderPlus Co., Ltd. All rights reserved.</p>
            </div>
            </div>
        )       
    }
}
export default Credit