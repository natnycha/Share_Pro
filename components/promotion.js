import React, { Component } from 'react'
import '../style/home.scss';
import { Icon } from 'antd';
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'

let eachPro = [
    {
        proheadname: 'come 3 free 1',
        moredetailpro: 'moredetail pro',  
    }, {
        proheadname: 'Student Card 10%off',
        moredetailpro: 'Come with skfcmslmc',
    }, {
        proheadname: 'Dancing to get free special menu',
        moredetailpro: 'Just dance!'
    }

]

class Promotion extends Component{
    state = {
        data: []

    }
    async componentDidMount() {
        //console.log(Cookies.get('token_u'))
        try {
            const res = await axios({
                method: 'GET',
                url: 'https://api.superder.me/shop/v2.0.0/get/promotions/'+`${this.props.value}`,
                headers: {
                    Authorization: Cookies.get('token_u'),
                },
            })
            let data = res.data.payload;
            //console.log(data);
            this.setState({
                data: data
            });

        } catch (error) {
            console.log("error", error)

        }

    }

    render(){
       // console.log('=>>',this.props.value)
       return( 
        <div>{
    
        this.state.data.map((singlePro) => {
            return (
                <div style={{margin: "20px"}}>
                <div>
                <div class="leftpro">
                {singlePro.namePro}
                </div>
                <div class="rightpro">
                {singlePro.detail}
                <div>
                <Link to={'/thead-pro/'+singlePro.id}>
                <button className="buttonshop">Join a group <Icon type="arrow-right" className="buttonsymbol" /></button>
                </Link>
                </div>
                </div>
                </div>
                </div>
            )
           } )  
        }</div> 
      )
    }}

export default Promotion
