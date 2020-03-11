import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Icon } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';

class Procard extends Component {
  constructor(props) {

    super(props);

    this.state = {
      namePro: '',
      detail:''
    }
}

  render() {
    
    let {detail,namePro}=this.props;
    console.log(detail,namePro)
    return(
      < a className='card'>
          
  <div >
      <div className="card">
          <div className="card-box" style={{fontSize:'27px',fontWeight:'bold'}}>
              {namePro}
              {/* <Button className="delete-button">
            <Icon type="delete" 
            className="buttonsymbol" 
            theme="filled" 
            style={{ size: '30px', color: 'white' }}/>
            </Button> */}
          </div>
              <div className="card-body  ">
                  <blockquote className="blockquote mb-0">
                  <p>{detail}</p>
                  
                  </blockquote>
              </div>
      </div>
  </div>  
</a>  
    )
  }
} 

export default Procard;