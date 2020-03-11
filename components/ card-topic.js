import React, { Component } from 'react'
import '../style/thead.scss';
import axios from 'axios'
import Cookies from 'js-cookie'

class Card_topic extends Component {

    constructor(props) {

        super(props);

        this.state = {
           topicName: '',
           detail:''
           
        }
    }
    render() {
        let {detail,topicName,date,username}=this.props;
        //console.log(detail,topicName)

        return (

< a className='card' onClick={this.submitFrom}>
              
        <div>
            <div class="card">
                <div class="card-box">
                    {topicName}
                </div>    
            </div>
                    <div class="card-body  ">
                        <blockquote class="blockquote mb-0">
                        <p>{detail}</p>
                        <footer class="blockquote-footer">{username} - <cite title="Source Title">{(new Date(date).toDateString())}</cite></footer>
                        </blockquote>
                    </div>
        </div>
        
         
 </a>
        )
    }
}



export default Card_topic