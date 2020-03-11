import React, { Component } from 'react'

export class Eachitem extends Component {
    render(){ 
        let {text} = this.props //รับค่า props text มาจากหน้า listitem
        return (
            <div className="betweenbox">
            <div className="message-box">
                {text}
            </div>
            </div>
        )
    }
}
export default Eachitem
