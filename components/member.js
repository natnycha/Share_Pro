import React, { Component } from 'react'
import '../style/modal.scss'

export class Member extends Component {
    render(){ 
        let {nameMem} = this.props //รับค่า props nameMem มาจากหน้า showmember
        return (
            <div className="betweenbox">
            <div className ="member">
            <div>{text}</div>    
            </div>
            </div>
        )
    }
}
export default Eachitem
