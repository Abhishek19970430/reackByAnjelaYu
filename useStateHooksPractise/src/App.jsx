import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime]= useState(now)
  
  function currentTime(){
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    
  }
  setInterval(currentTime, 1000);
  
    return (
      <div className="container">
        <h1>{time}</h1>
        <button onClick={currentTime}>Get Time</button>
      </div>
    );
  }
  
  export default App;
