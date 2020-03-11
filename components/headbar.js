import React, { Component } from 'react'
import {Menu, Icon, Drawer, Avatar, Button, Input} from 'antd';
import '../style/home.scss';
import { Redirect, Link } from 'react-router-dom'
import Cookies from 'js-cookie'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Search} = Input;


class Navbar extends Component{
  state = {
    visible: false,
    fname: 'Name',
    surname: 'Surname',
  };

  showDrawer = () =>{
    this.setState({
      visible: true,
    });
  };
  onClose = () =>{
    this.setState({
      visible:false,
    });
  };

  clicklogout=()=>{
    Cookies.remove('token_u');
    alert("logout")
    // alert(Cookies.get('token_u'))
  }
  render(){
    return(
      <nav className="menuBar">
        <Link to="/home">
        <div className="logo">
          <p>SharePro</p>
        </div>
        </Link>
        
        
        <div className="btnbar">
        <Search placeholder="search" onSearch={value => console.log(value)} style={{ width: 200 }}/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <Button className="barsMenu"  onClick={this.showDrawer}>
          <Icon className="barBtn" type={this.state.visible ? 'menu-unfold': 'menu-fold'} />
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div className="namesur">
             
              </div>
              <Link to="/uprofile"><Button type="link" block> 
            <Icon type="user" />
            Profile
            </Button></Link>


            <Link to="/"><Button type="link" block  onClick={this.clicklogout}>
            <Icon type="disconnect" />
            Log Out
            </Button></Link>
            </Drawer>
            </div>
        </nav>
    );
  }
}
export default Navbar;