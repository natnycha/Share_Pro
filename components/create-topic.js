import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Form } from 'react-bootstrap'
//import '../style/modal.scss'
import Formregis_shop from './form-regis-shop'
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import Cookies from 'js-cookie'
import { thisExpression } from '@babel/types';

export default class Create_topic extends React.Component {
  constructor() {
    super()
    this.state = {
      topicName: '',
      detail: '',
      data: []

    }
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose = () => {
    this.setState({
      show: false,
      topicName: '',
      detail: ''
    });
    console.log(this.state.show)
    this.props.fecth(this.props.promotionId)

  }
  onChange = (e) => {
    //console.log('set state')
    //console.log(e.target.value,);
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submit = (e) => {
    let data = {
      topicName: this.state.topicName,
      detail: this.state.detail,
      token: Cookies.get('token_u')


    }

    console.log(data);
    axios({
      method: 'POST',
      url: 'https://api.superder.me/client/v2.0.0/add/topic',
      headers: {
        Authorization: Cookies.get('token_u'),
      },
      data: {
        topicName: this.state.topicName,
        detail: this.state.detail,
        promotionId: this.props.promotionId
      }

    }).then(res => {
      console.log(res);
      console.log(res.data.payload)
      console.log(this.state.topicName, this.state.detail)
      console.log(this.state.token)
      this.setState({
        data: res.data.payload
      })
      this.handleClose()
    }).catch(e => {
      console.log(e)
    })


  }




  render() {
    //  alert(Cookies.get('token_u'))
    let { value, onChange } = this.props;
    return (

      <Form onSubmit={this.submit}>
        <div>
          <div onClick={(e) => this.setState({ show: !this.state.show })}>
          
              Create
                        
          </div>


          <Modal size="xl" show={this.state.show} onHide={this.handleClose} >
            <Modal.Header closeButton>
              <h3>Create Topic</h3>
            </Modal.Header>
            <br></br>
            <div>
              <br></br>
              <br></br>
              <br></br>
            <Modal.Body className="position-create-text">
              <Form.Group as={Row} controlId="formPlaintextTopicname">
                <Form.Label column sm="2">
                  Topic name :
                         </Form.Label>
                <Col sm="6" >
                  <Form.Control type="text" name="topicName" value={this.state.topicName} onChange={this.onChange} required />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextTopicname">
                <Form.Label column sm="2">
                  Detail :
                         </Form.Label>
                <Col sm="6" >
                  <Form.Control as="textarea" rows="3" name="detail" value={this.state.detail} onChange={this.onChange} required />
                </Col>
              </Form.Group>
            </Modal.Body>
            </div>
            <Modal.Footer>

              <a variant="primary" className='btn-create-topic' onClick={this.submit}>Post</a>
            </Modal.Footer>
          </Modal>
        </div>
      </Form>
    )
  }
}
