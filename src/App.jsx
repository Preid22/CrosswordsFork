import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="header">
        <img src="../src/eustace-400.webp" width="200"></img>
        <div className="title">
          <span>The New Jersey Times </span>
          <span> Crossword</span>
        </div>
        <div className="settings">
        <span>Settings</span>
        </div>
      </div>
      <div className="clue">
        <span>--Clues here--</span>
      </div>
      <div className="canvas">
        <div className="crossword-grid">
         A B C D E
        </div>
      </div>
      </div>

  )
}

export default App
