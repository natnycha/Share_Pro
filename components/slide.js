import React, { Component } from 'react'
import '../style/home.scss';
import { Carousel } from 'antd';
import Ma from '../static/images/ma.jpg'
import kfc2 from '../static/images/kfc2.jpg'
import SumFruit from '../static/images/sumfruit.png'
import YangNoey from '../static/images/yangneoy.jpg'


class Slide extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return (
        <Carousel autoplay>
            <div style={{display: "flex"}}>
            <img src={kfc2} />
            </div>
            <div style={{display: "flex"}}>
            <img src={SumFruit} />
            </div>
            <div>
            <img src={Ma} />
            </div>
            <div>
            <img src={YangNoey} />
            </div>
        </Carousel>
        )
    }
}
export default Slide
