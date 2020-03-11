import React, { Component } from 'react'
import '../style/modal.scss'

export default class Joingroupin extends Component {
    constructor(){
        super()
        this.state ={
            join :false
        }
        this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({ join: !this.state.join});
    }
    render() {
        let buttonText = this.state.join? 'Joined': 'Join this';
        let btn_class = this.state.join? "join-group-in-t" : "join-group-in-f";
        return (
            <div className="space-between">
                <button className={btn_class} onClick={this.handleClick} >{buttonText}</button>
            </div>
        )
    }
}
