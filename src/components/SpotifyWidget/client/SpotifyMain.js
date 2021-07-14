import React from 'react'
import Dashboard from './Dashboard'
import Login from "./Login"

const code = new URLSearchParams(window.location.search).get('code')

function SpotifyMain({mood, weather}) {
    return (code ? <Dashboard code={code} mood={mood} weather={weather}/> : <Login />)
    
}

export default SpotifyMain
