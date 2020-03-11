import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';
import '../style/regis.scss';
import Joingroup from './privacy-policy'
import Procard from './procard'

class Showpro extends Component {

    constructor(props) {

        super(props);

        this.state = {
           

        }
       
    }
   
   
    render() {
        let {detail,namePro}=this.props;
        return (


            <div className={'shop-form'}>
             
              <Procard detail={detail} namePro={namePro}/>
            </div>

        )
    }
}



export default Showpro