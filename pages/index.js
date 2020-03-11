import React, { Component } from 'react'
import Login from '../components/login'
import Loginshop from '../components/loginshop'
import Forgetpass from '../components/forgetpassword/form_foget'
import Home from '../components/home'
import Uprofile from '../components/uprofile'
import Homeshop from '../components/homeshop'
import Chat from '../components/chat'
import Joingroup from '../components/joingroup'
import Shop from '../components/shop'
import Privacy from '../components/privacy'
import Register from '../components/regis'
import FogetPassword from '../components/forgetpassword/index'
import Regis_shop from '../components/regis-shop'
import Thead_user from '../components/thead-user'
import About_us from '../components/about_us'
import ourTeam from '../components/ourteam'
import UserProfile from '../components/user-profile'
import AboutSharepro from '../components/about-sharepro'

import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import {stat}  from 'fs'
import Our_team from '../components/our-team'

class Index extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={Login}/>
          <Route path={'/logins'} component={Loginshop}/>
          <Route path="/home" component={Home}/>
          <Route path="/shop/:id" component={Shop}/>
          <Route path="/privacy" component={Privacy}/>
          <Route path={'/forget'} component={Forgetpass}/>
          <Route path={'/register'} component={Register}/>
          <Route path={'/uprofile'} component={Uprofile}/>
          <Route path={'/homeshop'} component={Homeshop}/>
          <Route path={'/chat'} component={Chat}/>
          <Route path={'/join'} component={Joingroup}/>
          <Route exact path={'/forgetpass'} component={FogetPassword}/>
          <Route path={'/regis-shop'} component={Regis_shop}/>
          <Route path="/thead-pro/:id" component={Thead_user}/>
          <Route path={'/our-team'} component={Our_team}/>
          <Route path={'/about-us'} component={About_us}/>
          <Route path={'/ourteam'} component={ourTeam} />
          <Route path={'/user-profile'} component={UserProfile}/>
          <Route path={'/about-sharepro'} component={AboutSharepro} />
        </Switch>
      </Router>
    )
  }
}

export default Index
