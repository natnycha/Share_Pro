import React, { Component } from 'react'
//import Restuahome from '../components/restauranthome'
import {Container, Row, Col} from 'reactstrap'
import { Card, Button } from 'react-bootstrap'
import { Icon } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

/*let eachShop = [
    { 
    name: "Burin",
    detail: "Mookata",
}, {
    name: "Shabu2N",
    detail: "Buffe Shabu Nearing RNP"
}, {
    name: "ป้าเขียว",
    detail: "อาหารตามสั่ง"
}, {
    name: "Steak techno",
    detail: "สเตกอร่อยราคานักศึกษา"
}, {
    name: "SumFruit",
    detail: "กินแล้วสดชื่น"
}, {
    name: "หอมเนย",
    detail: "จิบอกว่ดีกว่าย่างเนย สะอาดกว่า รู้ป่าว"
}

]*/

class ListShopAI extends Component{
    constructor(props) {
        super(props);
        this.state = {
        data: [],
    }}
    
        
    async componentDidMount() {
        console.log(Cookies.get('token_u'))
        try{
        const res = await axios({
        method: 'GET',
        url: 'https://api.superder.me/client/v2.0.0/get/shop/ai',
        headers:{
            Authorization: Cookies.get('token_u'),
        },
    })
    let data = res.data.payload;
    console.log(res.data.payload);
    //console.log("ai");
    this.setState({
        data:data
    });

}catch(error){
    console.log("error",error)

}
    // .then(res =>{
    //     console.log(res);
    //     console.log(res.data.payload)
    // }
    //    )
}

   /* async componentDidMount() {
        try { 
            const res = await axios({
                method: 'GET',
                url: 'https://api.superder.me/client/v2.0.0/get/shop/ai',
                headers:{
                    Authorization: Cookies.get('token_u'),
                },
            })
            //let data=res.data.payload;
            console.log(res.data.payload);
                //this.setState({
                    //data:data
           // });

        }
        catch(error){
            console.log("error",error)
        }
    }*/
        
    

    render(){
        console.log(this.state.data)
        return (
                <div >
                    <Container fluid>
                    <Row>
                        {
                            this.state.data.map((value) => {
                                return (
                                    <Col sm="4" >
                                    <div >
                                    <Card classname="card__one" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://i.ibb.co/3FRyHwy/1094172-img-t7twev-0p.jpg" />
                                    <Card.Body>
                                    <Card.Title style={{color: "black", fontWeight: "bold"}}>{value.shopName} 
                                    </Card.Title>
                                    <Card.Text style={{fontSize: '14px'}}>{value.description}
                                    </Card.Text>
                                    <Link to={'/shop/'+value.id}><button className="buttoncard" onClick={this.handleClick}><Icon type="arrow-right" className="buttonsymbol" style={{ fontSize: '16px'}} /></button> 
                                    </Link>
                                    </Card.Body>
                                    </Card>
                                </div>
                                </Col>
                                )
                            })
                        }
                        </Row>
                    </Container>
                </div>
      )
    }
}

export default ListShopAI

