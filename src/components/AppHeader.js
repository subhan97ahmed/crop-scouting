import React from 'react'
import im from "../img/Logo.png";

// import "./index.css"
function AppHeader() {
    return (
        <header className="App-header">
        <img src={im} style={{ imageResolution: "-moz-initial" }} />
      </header>
    )
}

export default AppHeader
