import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// const state= useState(0)
// console.log(state[0]);
// console.log(state[1]);
//useState hook ek array deta hai 2 element ka jisme pahle index par value and dusre par ek function hota hai
//vahi dono cheje line number 7 me "count" aur "setCount"  ke saat map ho jati hai 

  

  function increase(){
    setCount(count+1);
  }

  function decrease(){
    setCount(count-1);
  }


  return (
    <div className='container'>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default App
