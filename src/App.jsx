import { useState } from 'react'
import Card from './components/Card'
import colors from './components/colors.json'
import './App.css'

function App() {
  let randomizedColor = colors[Math.floor(Math.random() * colors.length)]
  const [actualColor, setActualColor] = useState(randomizedColor);
  document.body.style = `background: ${actualColor}`

  const changeColor = () => {
    randomizedColor = colors[Math.floor(Math.random() * colors.length)]
    setActualColor(randomizedColor)
  }

  return (
    <div className="App">
      <Card actualColor = {actualColor} changeColor = {changeColor}/>
      <p className="credits">Done by Michael A. Decena</p>
    </div>
  )
}

export default App
