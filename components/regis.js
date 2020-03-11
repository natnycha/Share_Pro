import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import Formregis from './form_regis'
import Steppers from './stepper'
import { Container, Row, Col } from 'reactstrap';
import '../style/regis.scss';



class Regis extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <div >
                <div class="sharepro-header">Sharepro</div>
            <div className='box-regis'>
                <br></br>
                <br></br>
                
                
                <Form.Text className='text-head '>
                     Create your account
                 </Form.Text>
                 
                
                <Steppers/>
               
              </div> 
            </div>    

        )
    }
}
export default Regis;