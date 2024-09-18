import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  
  function handleChange(event) {
    const newTask  = event.target.value;
    setTask(newTask);
  }

  function addTask(){
    //Here is the use of Spread operator
    setTaskList(prevTasks=>{
      return[...prevTasks,task];
    })
   setTask("");

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange}type="text" value={task} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {taskList.map(item=><li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
