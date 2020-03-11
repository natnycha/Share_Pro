import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button,Form } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Cookies from 'js-cookie'


const format = 'HH:mm';

class Addpro extends Component {

  constructor() {
    super();
    this.state = {
      data:[]

    }
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose = () => {
    this.setState({ show: false });
    console.log(this.state.show)
    this.props.fecth()
    // this.props.insertdata(this.state.data)

  }
  onChange = (e) => {
    //console.log('set state')
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = (e) => {
    let data = {
      namePro: this.state.namePro,
      detail: this.state.detail,
      token:Cookies.get('token_u')
    }
  

    {/*console.log('sadqwe',data);*/ }
    axios({
      method: 'POST',
      url: 'https://api.superder.me/shop/v2.0.0/add/promotion',
      headers:{
        Authorization: Cookies.get('token_u'),
    },
      data: {
        namePro: this.state.namePro,
        detail: this.state.detail
      }
    }).then(res => {
      console.log(res);
      console.log(res.data.payload)
      console.log(this.state.namePro,this.state.detail)
      console.log(this.state.token)
      console.log("post pro")
      this.setState({
        data:res.data.payload
      })
      this.handleClose()
  }).catch(e=>{
    console.log(e)
  })

  }

  render() {
    let {value,onChange}=this.props;
    return (
        <Form onSubmit={this.submit}>
       <div>
            <div onClick={(e)=> this.setState({show: !this.state.show})}>
                    <  a >
                        Add Promotion
                            </a>
                            </div>

                            
        <Modal size="xl" show={this.state.show} onHide={this.handleClose} >
          <Modal.Header  closeButton style={{backgroundColor:'#004e66', height:'20%'}}>
            <h3 style={{color:'white'}} >Create Promotion</h3>



          </Modal.Header>
          <Modal.Body className="card-text" style={{marginLeft:'22%'}}>
                        <Form.Group as={Row} controlId="formPlaintextnamePro">
                        <Form.Label column sm="4" style={{marginLeft:'1%',fontSize:'30px'}}>
                        Promotion name :
                         </Form.Label>
                        <Col sm="8" >
                            <Form.Control type="text" name="namePro" value={this.state.namePro} onChange={this.onChange} required />
                        </Col>
                        </Form.Group>   
                        <Form.Group as={Row} controlId="formPlaintextnamePro">
                        <Form.Label column sm="4" style={{marginLeft:'1%',fontSize:'30px'}}>
                       Description :
                         </Form.Label>
                        <Col sm="8" >
                            <Form.Control as="textarea"  rows="6" name="detail" value={this.state.detail} onChange={this.onChange} required />
                        </Col>
                </Form.Group>     
                </Modal.Body>
          <Modal.Footer style={{height:'10%'}}>
            
            <a variant="primary" className='addprocon-button' onClick={this.submit} style={{color:'white'}}>+Add Promotion</a>
          </Modal.Footer>
        </Modal>
      </div>
      </Form>
    );
  }
}

export default Addpro;
