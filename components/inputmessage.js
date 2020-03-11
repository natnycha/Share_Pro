import React, { Component } from 'react'
//import Messagelist from '../components/messagelist'
import ListItems from './listitems'

export default class inputmessage extends Component {
    constructor(props){
        super(props)
        this.state = {
            newEach:"",
        }
        this.sendbuttClick = this.sendbuttClick.bind(this)
    }
    sendbuttClick(){ //function เมื่อคลิกปุ่ม send
        let {onAddEach} = this.props //รับprop onAddEach มาจากหน้า chat 
        onAddEach(this.state.newEach)
        this.setState({
            newEach:""  //ล้างค่าข้อความที่พิมพ์เมื่อส่ง
        })
    }

    render() {
        let {newEach} = this.state
        return (
            <div>
                <input value ={newEach} className="input-text" type="text" 
                    placeholder="Type your message :)"  onChange={(e)=>this.setState({newEach:e.target.value})}/>
                <button className="send" onClick={this.sendbuttClick}>Send</button>
            </div>
        )
    }
}
