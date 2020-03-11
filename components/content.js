import React, { Component } from 'react'
import '../style/home.scss';
import { Pagination } from 'antd';
import Slide from '../components/slide'
import { Card, Button } from 'react-bootstrap'
import Restuahome from '../components/restauranthome'
import axios from 'axios'
import { Item } from 'rc-menu';
import { id } from 'date-fns/esm/locale';
import ListShop from '../components/list_shop'
import ListShopAI from '../components/list_shop_AI'



class Content extends Component{
    
    constructor(props){
        super(props)
        this.state ={   
        }
    }

    render(){

        return (
                <div><Slide/>
                <div className="headName"><h2>SharePro ให้คุณมี connection ใหม่ๆ เพราะเราใส่ใจในทุกๆโปรโมชั่น เพื่อทุกวัน...พิเศษยิ่งขึ้น !</h2></div>
                <div className="topicpro"><p>Pick For You</p></div>
                <div className="contentset">
                <ListShopAI />
                </div>
                <div className="topicpro"><p>Explore</p></div>
                <div className="contentset">
                <ListShop/>
                
                </div>
                </div>
        )
    }
}

export default Content
