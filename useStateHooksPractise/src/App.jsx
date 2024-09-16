import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [TIME, setTime]= useState(0)
  
  function currentTime(){
    let time = new Date().toLocaleTimeString();
    setTime(time);
    
  }
  setInterval(currentTime, 1000);
  
    return (
      <div className="container">
        <h1>{TIME}</h1>
        <button onClick={currentTime}>Get Time</button>
      </div>
    );
  }
  
  export default App;
