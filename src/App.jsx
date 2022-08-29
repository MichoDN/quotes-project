import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import colors from './components/colors.json'

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
    </div>
  )
}

export default App
