import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Homeshop from '../components/homeshop'
  
  export default class Addhere extends React.Component {
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
      <div>
        <div className="title-text1">
        <div>Add your promotion</div>
        <button 
        className="addpro-button" 
        onClick={(e)=> this.setState({show: !this.state.show})}>
            Add Here
        </button>
        </div>
        <div className="title-text2">
        <div >Your promotion</div>
        </div>
      </div>
    </div>
          
  )
}
}