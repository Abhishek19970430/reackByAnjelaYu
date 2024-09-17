import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isMouseOver, setMouseOver]= useState(false);
  
  function handleonMouseOver(){
  setMouseOver(true);
  console.log("MouseOver")
  }
  function handleonMouseOut(){
  setMouseOver(false)
  console.log("MouseOut")
  
  }
  
  
    return (
      <div className="container">
        <h1>Hello</h1>
        <input type="text" placeholder="What's your name?" />
        <button style={{backgroundColor: isMouseOver? "black":"white"}}
        onMouseOver={handleonMouseOver}
        onMouseOut={handleonMouseOut} >Submit</button>
      </div>
    );
  }
  
  export default App;