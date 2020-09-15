import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' component={LandingPage}/>
      </Switch>
    </div>
    
  );
}

export default App;
