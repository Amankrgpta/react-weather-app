import { useState } from 'react'
import WeatherWidget from './WeatherWidget'




function App() {
  const [count, setCount] = useState(0)

  return (
   <>
       <WeatherWidget></WeatherWidget>
   </>
  )
}

export default App
