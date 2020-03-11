import React, { Component } from 'react'
import '../style/home.scss';
import { Card, Button } from 'react-bootstrap'
import { Icon } from 'antd';
import {Redirect} from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom'


class Restuahome extends Component{
    render(){

        return (
            <div>
            <div className="gapcontent">
                <Card classname="card__one" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/3FRyHwy/1094172-img-t7twev-0p.jpg" />
                <Card.Body>
                <Card.Title>
                    test</Card.Title>
                <Card.Text>
                 test
                </Card.Text>
                <Link to="/shop"><button className="buttoncard" onClick={this.handleClick}><Icon type="arrow-right" className="buttonsymbol" style={{ fontSize: '16px'}} /></button> </Link>
                </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
}
export default Restuahome
