import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListRenderer from './components/ListRenderer'
import { FunctionalListRenderer } from './components/FunctionalListRenderer'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + GOIT</h1>
      <ListRenderer />
      {/* <FunctionalListRenderer /> */}
    </div>
  )
}

export default App
