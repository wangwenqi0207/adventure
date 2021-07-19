import React from 'react'
import {
  BrowserRouter as Router,Route
}from 'react-router-dom'
import  _  from 'lodash';
import { routers}  from '../common/router'
import Login from '../pages/Login'

class PrivateRoute extends React.Component {
    render() {
      return (
          <>
          {/* {
            ! _.isEmpty(routers)  ?
            _.map(routers,item=>{
              return(
                <Route path={item.path} key={item.key} component={Files}/>
              )
            }):null
          } */}
          <Router><Route path='/login' component={Login} ></Route></Router>
          home
          </>
      )
    }
}

export default PrivateRoute