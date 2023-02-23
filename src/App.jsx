import './App.css';
import SamosaPic from "./assets/samosa.jpg";

const App = () => {
  return (
    <div className="App">

      <div className = "header">
        <h1>Samosa Selector</h1>
        <h2>Count:</h2>
        <img className="samosa" src={SamosaPic}/>
      </div>
    </div>
  )

}
export default App
