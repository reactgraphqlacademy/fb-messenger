import React from "react"
import "./App.css"
import TopBar from "./app/TopBar"
import Messenger from "./app/Messenger"

const App = () => {

  const loggedUser = { name: 'Alex' }
    
  return (
    <div className="app">
      <TopBar user={loggedUser} userPosition="right" />
      <Messenger />
    </div>
  )
}

export default App
