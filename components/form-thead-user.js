import React, { Component } from 'react'
import '../style/thead.scss';
//import axios from 'axios'
import Card_topic from './ card-topic'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import {Sonnet} from 'react-bootstrap';
import Mbti_regis from './mbti_regis';
import Topic_show from './thead-topic'
import Create_topic from './create-topic'
import axios from 'axios'
import Cookies from 'js-cookie'
import { classBody } from '@babel/types';

class Formthead_user extends Component {

    constructor(props) {

        super(props);

        this.state = {
          data:[],
          dataMbti:[],
           count: [1,2,3,4],
           promotionId:null,
        }
        this.fecth = this.fecth.bind(this);
    }
    async fecth(pro){
      try {
        const res = await axios({
            method: 'GET',
            url: 'https://api.superder.me/client/v2.0.0/get/all/topics/'+`${pro}`,
            headers:{
                Authorization: Cookies.get('token_u'),
            },
        })
          let data=res.data.payload;
          // console.log(data);
        //  console.log(res.data.payload);
            this.setState({
              data:data,
              
            });
            
            const res2 = await axios({
              method: 'GET',
              url: 'https://api.superder.me/client/v2.0.0/get/mbti/topics',
              headers:{
                  Authorization: Cookies.get('token_u'),
              },
          })
            let data2=res2.data.payload.topics;
            //console.log(data);
              this.setState({
                dataMbti:data2
              });
       
    }
    catch(error) {
        console.log("error", error)
    }
    }

    async componentDidMount() {

      try {

          const res = await axios({
              method: 'GET',
              url: 'https://api.superder.me/client/v2.0.0/get/all/topics/'+`${this.props.value}`,
              headers:{
                  Authorization: Cookies.get('token_u'),
              },
          })
            let data=res.data.payload;
            // console.log(data);
          //  console.log(res.data.payload);
              this.setState({
                data:data,
                promotionId:this.props.value
              });
              console.log('=>>',this.state.promotionId)
              const res2 = await axios({
                method: 'GET',
                url: 'https://api.superder.me/client/v2.0.0/get/mbti/topics/'+`${this.props.value}`,
                headers:{
                    Authorization: Cookies.get('token_u'),
                },
            })
              let data2=res2.data.payload;
              //console.log(data);
                this.setState({
                  dataMbti:data2
                });
         
      }
      catch(error) {
          console.log("error", error)
      }
        }
 
  render() {
    return (
      <div>
      <div className=' btn-create-topic-position'>
        <div className='btn-create-topic '>
        <Create_topic promotionId={this.props.value} fecth={this.fecth}/>
        </div>
        </div>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Show all" className='text-color1'>
          <div className='form-topic'>
            {this.state.data.map(value=>{
              //console.log(value.user)
              let username =value.user?value.user.username:'Unknown'
              //console.log(value.detail,value.topicName)
              return (<Topic_show detail={value.detail} topicName={value.topicName} date={value.createdAt} username={username}/>)
              
            })}
          </div>
        </Tab>
        <Tab eventKey="profile" title="MBTI">
          <div className='form-topic'>
          {this.state.dataMbti.map(value=>{
              //console.log(value.user)
              let username =value.user?value.user.username:'Unknown'
              //console.log(value.detail,value.topicName)
              return (<Topic_show detail={value.detail} topicName={value.topicName} date={value.createdAt} username={username}/>)
              
            })}
          </div>
      </Tab>
</Tabs>
    </div>
        )
    }
  
}


export default Formthead_user