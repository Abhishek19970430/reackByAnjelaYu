import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  });
console.log(fullName)
  function handleChange(event) {
    const { value, name } = event.target;
    console.log(value);

    setfullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (name === "lName") {
        return {
          fname: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

//  LongerMethod
// function App() {

// const[fname, setfname]= useState("");
// const[lname, setlname]= useState("");

// function handlefChange(event){
//  console.log(event.target.value)
//  setfname(event.target.value)
// }
// function handlelChange(event){
//   console.log(event.target.value)
//   setlname(event.target.value)

// }
//   return (
//     <div className="container">
//       <h1>Hello   {fname}   {lname} </h1>
//       <form>
//         <input onChange={handlefChange} name="fName" placeholder="First Name" value={fname} />
//         <input onChange={handlelChange} name="lName" placeholder="Last Name"  value={lname}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }
