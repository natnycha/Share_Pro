import React, { Component } from 'react'
//import Messagelist from '../components/messagelist'
import Inputmessage from '../components/inputmessage'
import Listitem from '../components/listitems'
import '../style/chat.scss'
import Joingroup from './joingroup'

export default class Chat extends Component {
    constructor(props){
        super(props)
        this.state ={
            eachItem :[]
        }
        this.addEach = this.addEach.bind(this)
    }
    addEach(newEach){ //ถ้ามีการเพิ่มข้อความใหม่มาให้set newEach เป็น eachItem 
        if(newEach !=""){
        this.setState({
            eachItem: this.state.eachItem.concat([newEach])
    })}
    }

    render() {
        let {eachItem} = this.state
        return (
            <div className="all-in-chat">
                <div className="header-topic">
                    <div className="text-header">ไปกินย่างเนยกัน</div>
                    <div className="space-join">
                        <Joingroup >Join Group</Joingroup>
                    </div>
                </div>

            <div className="showchat">
            
                <Listitem items = {eachItem}/>      
            </div> 
            <div id="input-form">
            <Inputmessage onAddEach ={this.addEach}/>         
            </div>
            </div>
            //ใน input^^ ส่ง props onAddEach ไปถ้ามีการเพิ่มข้อความให้มาใช้ function addEach          
        )
    }        
    
}
