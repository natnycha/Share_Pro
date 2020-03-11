import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import '../style/modal.scss'
import Joingroupin from './joingroupin'
import Showmember from './showmember'




export default class Joingroup extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose = () => {
    this.setState({ show: false });
    console.log(this.state.show)

  }


  render() {
    return (
      <div>
        <button className="join-group" onClick={(e)=> this.setState({show: !this.state.show})}>
          Join group 
                </button>
        <Modal size="xl" show={this.state.show} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title className="align-center">Members</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="all-content">
            <div className="space-show-mem"><Showmember/></div>
            <div className="align-center"><Joingroupin onClick={this.handleClose}>join group</Joingroupin></div>
            </div>
            </Modal.Body>

        </Modal>
      </div>
    )
  }
}



