import React, { Component } from 'react'
import chat from '../style/chat.scss';

const DUMMY_DATA = [
   {
      senderId: 'Nfon',
      text: 'hellooooooooooooooooooooooooooooooooooooooo'
   },
   {
      senderId: 'T',
      text: 'hii'
   },
   {
      senderId: 'Mint',
      text: 'heehee '
   }
]

export default class Messagelist extends Component {
   render() {
      return (
         
         <div>
            {
               DUMMY_DATA.map((message, index) => {
                  return (
                     <div key={index}>
                        <div>{message.senderId}</div>
                        <div class ="message-box">{message.text}</div>
                     </div>
                  )
               })
            }
         </div>
      )
   }
}
