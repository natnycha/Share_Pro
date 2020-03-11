import React, { Component } from 'react'
import '../style/uprofile.scss';
import Credit from './credit';
import Navbar from '../components/headbar'
import Infocard from './infocard';

class UserProfile extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div>
                    <div className="headuser">

                    </div>
                    </div>
                <Credit/>
            </div>
        )
    }

}   

export default UserProfile;