import React, { useState, useEffect } from 'react'
import './landing.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Landing() {

    const [ user, setUser ] = useState('')

    return (
        <div className="landing">
            <h1 className='landing-head'>hi!</h1>
            <Link to='/courses'>courses</Link>
            <Link to='/plan'>plan</Link>
        </div>
    )

}

export default Landing
