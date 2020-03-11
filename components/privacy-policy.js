import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
//import '../style/modal.scss'
import Navbar from '../components/headbar'
import Credit from '../components/credit'




export default class Privacy extends React.Component {
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
        <a onClick={(e)=> this.setState({show: !this.state.show})}>
        By registering, you agree to our legal term and condition and privacy policy
                </a>
        <Modal size="xl" show={this.state.show} onHide={this.handleClose} >
          <Modal.Header /*closeButton*/>
            <h2>Sharepro Privacy Policy</h2>
          </Modal.Header>
          <div>
            
              <div className="privacypolicy" >
                <h1>Privacy Policy for SharePro</h1>

                <p>At SharePro, accessible from superder.me, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SharePro and how we use it.</p>
 
                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
            
                <h2>Privacy Policies</h2>
            
           
                <p>Note that SharePro has no access to or control over these cookies that are used by third-party advertisers.</p>
            
                <h2>Third Party Privacy Policies</h2>
            
                <p>SharePro's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
            
                 <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
               
               </div>
                
            </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

