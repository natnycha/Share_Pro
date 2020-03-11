import React, { Component } from 'react'
import Eachitem from '../components/eachitem'

export default class Listitem extends Component{
    render(){
        let {items} = this.props //props ชื่อ items ที่หน้า chat ส่งมา
        return(
            <div>{
                items.map((each,i) => <Eachitem key={i} text={each}/>)
                //map ค่าออก(แต่ละตัวที่ได้ each รองรับ)มาแล้วส่งข้อความไปทาง props ชื่อ text ไปหน้า Eachitem
                //ถ้าเชื่อม databaseให้เอา id มาเป็น key แทนอันนี้ลองเฉยๆ
                }
            </div>

        )
    }
}


