import React, { Component } from 'react'
import Formregis_shop from './form-regis-shop'
import { Button, Form } from 'react-bootstrap'
import '../style/regis.scss';

class Regis_shop extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <div >
                <div class="sharepro-header">Sharepro</div>
            <div className='box-regis-shop'>
                <br></br>
                <br></br>
              
                <Formregis_shop/>
               
              </div> 
            </div>    

        )
    }
}
export default Regis_shop;