import React, { Component } from 'react'
import {
  Card, CardTitle, CardText, CardBody } from 'reactstrap'
import { Button } from 'react-bootstrap'
import { Icon } from 'antd';
import Mbti_regis from './mbti_regis';
import axios from 'axios'
import Cookies from 'js-cookie'

class Infocard extends Component {
  constructor(props) {

    super(props);

    this.state = {
      data:[],
      // username:'',
      // firstName:'',
      // lastName:'',
      // email: '',
      // facebook:'',
      // instagram:'',
      // mbti:''
    }
}
// async componentDidMount() {
  
//   try {
//       // let data ={
//       // username:this.state.username,
//       // firstName:this.state.firstName,
//       // lastName:this.state.lastName,
//       // email:this.state.email,
//       // facebook:this.state.facebook,
//       // instagram:this.state.instagram,
//       // mbti:this.state.mbti
//       // }
//       const res = await axios({
//           method: 'GET',
//           url: 'https://api.superder.me/client/v2.0.0/get/user/'+`${this.props.match.params.id}`,
//           data ={
//             username:this.state.username,
//             firstName:this.state.firstName,
//             lastName:this.state.lastName,
//             email:this.state.email,
//             facebook:this.state.facebook,
//             instagram:this.state.instagram,
//             mbti:this.state.mbti
//           },
//           headers:{
//             Authorization: Cookies.get('token_u'),
//          
//           },
          
//       })
//         let data=res.data.payload;
        // console.log(res.data.payload);
//           this.setState({
//             data:data
//           });
     
//   }
//   catch(error) {
//       console.log("error", error)
//   }
//     }

  render() {
    let {value}=this.props;
     let {firstName,lastName,email,facebook,instagram,mbti}=value;
    //     console.log(username,firstName,lastName,email,facebook,instagram,mbti)
        
          // const { id } = this.props.match.params;
    return(
      <div>
          <div >
            <Card style={{ width: '97%',backgroundColor:'#FbFDFF',height:'20rem',marginTop:'10px'}} className="mini-card">
              <CardBody className="card-body">       
                <CardTitle className="card-title" style={{color:'#004e66'}}>
                  {/*<p>{firstName} &nbsp; &nbsp;{lastName}</p> */}
                  <p>{firstName} {lastName}</p>
                  </CardTitle>
                <CardText style={{fontSize:'25px',left:'30px'}}>
                  
                  <p>email: {email}</p>
                  <p>facebook: {facebook}</p>
                  <p>instagram: {instagram}</p>
                  <p>mbti:{mbti}</p>
                  {/*
                  <p>email: &nbsp;{email} </p>
                  <p>facebook: &nbsp;{facebook} </p>
                  <p>instagram: &nbsp;{instagram} </p>
                  <p>mbti: &nbsp;{mbti} </p> */}
                  </CardText>
              </CardBody>
            </Card>
            </div>
        </div>
    )
  }
}

export default Infocard;