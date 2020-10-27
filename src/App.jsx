import React from 'react'
import './App.css'
import {
  Switch,
  Route
} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import CoursesPage from './pages/CoursesPage'

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/'  exact component={LandingPage}/>
        <Route path='/courses'  component={CoursesPage}/>
      </Switch>
    </div>
  )
}

export default App
