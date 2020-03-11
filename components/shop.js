import React, { Component } from 'react'
import '../style/home.scss';
import Navbar from '../components/headbar'
import Credit from '../components/credit'
import { Icon, Collapse } from 'antd';
import Promotion from '../components/promotion'
import { Figure } from 'react-bootstrap'
import Cookies from 'js-cookie'
import axios from 'axios'
const { Panel } = Collapse;

//getbyID

class Shop extends Component {
    state = {
        RestName: 'MooKraTa',
        typeRest: 'Thaifood',
        locate: 'เกกี 5 ลาดกระบัง กรุงเทพมหานคร',
        Tel: '0955921089',
        OpenHour: '17:00 - 23:00',
        Facebook: 'Moo Krat',
        WebURL: '-',
        Instagram: '@MooKrata',
        data: []

    }
   async componentDidMount() {
        //console.log(Cookies.get('token_u'))
        try {
            const res = await axios({
                method: 'GET',
                url: 'https://api.superder.me/client/v2.0.0/get/shop/'+`${this.props.match.params.id}`,
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

    render() {
        //let {id,shopName} = this.props.id;
        //console.log(this.props.id)
        //console.log(this.props);
        const { id } = this.props.match.params;


        return (
            <div>
                <Navbar />
                <div>


                </div>
                <div className="namerest">
                    <p>{this.state.data.shopName}</p>
                </div>

                <div className="typefood" >
                    <p>{this.state.data.type}</p>
                </div>

                <div className="shopdetail">
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header="Contact" key="1">
                            <h3>Location</h3>
                            <p>{this.state.data.address}</p>
                            <h3>Tel</h3>
                            <p>{this.state.data.phoneNumber}</p>
                        </Panel>
                        <Panel header="More Information"
                            key="2">
                            <h3>Open Hour</h3>
                            <p>{this.state.data.openHours}</p>
                            <h3>More Information</h3>
                            <p>{this.state.data.description}</p>
                            <h3>Facebook</h3>
                            <p>{this.state.data.facebook}</p>
                            <h3>Web URL</h3>
                            <p>{this.state.data.webUrl}</p>
                            <h3>Instagram</h3>
                            <p>{this.state.data.instagram}</p>

                        </Panel>
                    </Collapse>
                </div>
                <div className="topicpro"><p>Promotion</p></div>
                <div className="contentset">
                    <Promotion value={this.props.match.params.id} />
                </div>
                <Credit />
            </div>
        )
    }
}
export default Shop
