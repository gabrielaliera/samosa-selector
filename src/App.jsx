import { useState } from 'react'
import './App.css';
import SamosaPic from "./assets/samosa.png";


const App = () => {
  const [ count, setCount] = useState(0)

  const [multipler, setMultipler] = useState(1)

  const updateCount = () => {
    setCount(count + multipler);
  }
  
  return (
    <div className="App">

      <div className = "header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src={SamosaPic} onClick={updateCount}/>
      </div>
    </div>
  )

}
export default App
