import React from "react";

function Note(props) {
function handleClick(){
props.onDelete(props.id);
//onDelete(deleteNote()) function jo ki App.jsx me define hai usko me Note.jsx se call kar pa
//raha hu kyuki App.jsx se deleteNote function ka refference pass   kiya hai 
//Note.js component ko kar karte time. 
}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
