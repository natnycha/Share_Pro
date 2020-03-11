import React, { Component } from 'react'
import {
  Card, CardTitle, CardText, CardGroup, CardBody
  ,Container, Col, Row } from 'reactstrap'
import Infocard from './infocard';
import Credit from './credit';
import Navbar from '../components/headbar'
import '../style/uprofile.scss';
import Showtopic from './showtopic';
import axios from 'axios'
import Cookies from 'js-cookie'


class Uprofile extends Component {

  state = {
    data: [],
    data2:[]
  };
  
  // // constructor(props) {

  // //   super(props);

  // //   this.state = {
  // //     data:[],
  // //     dataMbti:[],
  // //   //   username:'',
  // //   //   firstName:'',
  // //   //   laststName:'',
  // //   //   email: '',
  // //   //   facebook:'',
  // //   //   instagram:'',
  // //   //  mbti:''
  // //   }
  // }*/
  async componentDidMount() {

    try {
        const res = await axios({
            method: 'GET',
            url: 'https://api.superder.me/client/v2.0.0/get/my/topics',
            
            headers:{
                Authorization: Cookies.get('token_u'),
            },
        })
          let data=res.data.payload;
          //console.log(data);
            this.setState({
              data:data
            });
            const res2 = await axios({
              method: 'GET',
              url: 'https://api.superder.me/client/v2.0.0/get/user',
              headers:{
                  Authorization: Cookies.get('token_u'),
              },
          })
            let data2=res2.data.payload;
            console.log(data2);
              this.setState({
                data2:data2
              });
    }
    catch(error) {
        console.log("error", error)
    }
      }

  render() {
    return(


      <div>
      <Navbar/>
      <div>
        <div className="uprofile-head">
            <img
              src="https://image.flaticon.com/icons/png/512/149/149071.png"
              alt="userpic"
              className="userpic-img"
            /></div>
              <div className="user-text">
                <div>
                {this.state.data2.username} 
              {/* {this.state.data.username}  */}
              </div>
          </div>      
          
          <div class="Row-1">
          <Col xs={6}></Col>
          <div class="Colum-1" style={{marginLeft:'32px',marginTop:'35px'}}>
            <Infocard value={this.state.data2}/>
            </div>
            <Col xs={6}></Col>
            <div class="Colum-2">
            <div className='form-topic'>
            {this.state.data.map(value=>{
              //console.log(value.user)
              let username =value.user?value.user.username:'Unknown'
              //console.log(value.detail,value.topicName)
              return (<Showtopic detail={value.detail} topicName={value.topicName} date={value.createdAt} username={username}/>)
              
            })} 
          </div>
            </div>
            </div>
            
            
          <div className="ucontactcradit">
      <Credit/>
      </div>
          
          
         
        </div>
        
        
        
      </div>
    )
  }
}

export default Uprofile;
