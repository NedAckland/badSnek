import { useState } from 'react';
import './App.css';
import Grid from './components/Grid'


function App() {
  const [isGameOver, setIsGameOver] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h1>  {isGameOver ? "You died" : "SNEK" }</h1>
      </header>
      
      <div className='grid--container'>
        {isGameOver ? 
        <div>
          <button onClick={() => setIsGameOver(false)}>Play Again?</button>
        </div> 
        : 
          <Grid setIsGameOver={setIsGameOver}/>
        }
      </div>
    </div>
  );
}

export default App;
