import React from "react";
import { useState } from "react";

function CreateArea(props) {

    const[note, setNote]= useState({
      title: "",
      content:""
    })
   

  function handleOnChange(event){
    const{name,value}=event.target;
     setNote(prevNote=>{
      return{
        ...prevNote, 
        [name]: value
      }
     });
     
  }  

  function submitNote(event){
    event.preventDefault();
    props.onadd(note);
    setNote({
      title: "",
      content:""
    })
  }

  // function addNote(event){
    
  // }  



  return (
    <div>
      <form>
        <input onChange={handleOnChange}value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleOnChange}value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}> Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
