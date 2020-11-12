import React from 'react'
import './App.css'
import { Switch, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import PlanPage from './pages/PlanPage'
import UserPage from './pages/UserPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AdviseCoursePage from './pages/AdviseCoursePage'

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/register' exact component={RegisterPage}/>
        <Route path='/login' exact component={LoginPage}/>
        <Route path='/advise/courses' exact component={AdviseCoursePage}/>
        <Route path='/plan' component={PlanPage}/>
        <Route path='/user' component={UserPage}/>
      </Switch>
    </div>
  )
}

export default App
