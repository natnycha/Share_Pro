import React, { Component } from 'react'
import Formthead_user from './form-thead-user'
import Navbar from '../components/headbar'
import Credit from '../components/credit'

class Thead_user extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){
        console.log(this.props.match.params.id)
        return(
            <div >
                <Navbar />
            <div >
                <br></br>
                <br></br>
              
                <Formthead_user value={this.props.match.params.id}/>
               
              </div> 
              <Credit />
            </div>    

        )
    }
}
export default Thead_user;