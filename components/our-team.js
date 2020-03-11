import React, { Component } from 'react'
import Formthead_user from './form-thead-user'
import Navbar from '../components/headbar'
import Credit from '../components/credit'
import About_us from './about_us'
import '../style/regis.scss';
class Our_team extends Component{
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
              
                <About_us />
               
              </div> 
              <Credit />
            </div>    

        )
    }
}
export default Our_team;