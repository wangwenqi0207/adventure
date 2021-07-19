import React from 'react'
import {
  BrowserRouter as Router,Route
}from 'react-router-dom'

import Login from './Login'
import Home from './Home'
import PrivateRoute from '../component/PrivateRoute'

function App(){
    return(
        <Router>
          <div>
            <Route path='/' component={Login} exact></Route>
            <Route path='/login' component={Login} ></Route>
            <Route path='/home'>
              <Home>
                <PrivateRoute/>
                user
              </Home>
            </Route>
          </div>
        </Router>
    )
}

export default App