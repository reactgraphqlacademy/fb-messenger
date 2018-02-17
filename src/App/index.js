import React from "react"
import "./index.css"
import TopBar from "./TopBar"
import Messenger from "./Messenger"

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
