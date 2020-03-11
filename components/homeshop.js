import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Addpro from '../components/addpro'
import Procard from '../components/procard'
import axios from 'axios'
import Cookies from 'js-cookie'
import '../style/homeshop.scss';
import Showpro from './showpro';


export default class Homeshop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      show: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.fecth = this.fecth.bind(this)
  }

  handleClose = () => {
    this.setState({ show: false });
    console.log(this.state.show)

  }
  async fecth() {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://api.superder.me/shop/v2.0.0/get/my/promotions',
        headers: {
          Authorization: Cookies.get('token_u'),
        },
      })
      let data = res.data.payload;
      console.log(data);
      this.setState({
        data: data
      });
    }
    catch (error) {
      console.log("error", error)

    }
  }
  async componentDidMount() {

    try {
      const res = await axios({
        method: 'GET',
        url: 'https://api.superder.me/shop/v2.0.0/get/my/promotions',
        headers: {
          Authorization: Cookies.get('token_u'),
        },
      })
      let data = res.data.payload;
      console.log(data);
      this.setState({
        data: data
      });
    }
    catch (error) {
      console.log("error", error)

    }
  }


  render() {
    return (
      <div>
        <div className="sharepro-header">Sharepro</div>
        <div>
          <div >
            <div className="title-text1">
              <div className="title-text3">Add your promotion</div>
              <div className='addpro-button'>
                <Addpro fecth={this.fecth} />
              </div>
              <div className="title-text2">
                <div>Your promotion</div>

              </div>
            </div>
            {/* <Addpro 
        className="addpro-button" 
        onClick={(e)=> this.setState({show: !this.state.show})}>
            Add Here
        </Addpro>*/}



            <div style={{ marginTop: '2%', marginLeft: '10%', marginRight: '10%' }}>
              {this.state.data.map(value => {
                // console.log(value.user)
                // let namePro =value.namePro?value.user.username:'Unknown'
                //console.log(value.detail,value.topicName)
                return (<Showpro detail={value.detail} namePro={value.namePro} />)

              })}
            </div>
          </div>
          <div>


          </div>
        </div>
      </div>

    )
  }
}