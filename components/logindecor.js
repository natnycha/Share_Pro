import React, { Component } from 'react'
import '../style/home.scss';
import Img from 'react-image';

const Photo = () => <Img src="https://i.ibb.co/rHzvTgF/forlogin.jpg"/>

class Decorlog extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
            <div>
                <div>
                    {Photo}
                    <p>Testt</p>
                    </div>
            </div>
        )       
    }
}
export default Decorlog
