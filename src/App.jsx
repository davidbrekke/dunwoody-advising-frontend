import React from 'react'
import './App.css'
import {
  Switch,
  Route
} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import CoursesPage from './pages/CoursesPage'
import PlanPage from './pages/PlanPage'
import UserPage from './pages/UserPage'


function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/courses' component={CoursesPage}/>
        <Route path='/plan' component={PlanPage}/>
        <Route path='/user' component={UserPage}/>
      </Switch>
    </div>
  )
}

export default App
