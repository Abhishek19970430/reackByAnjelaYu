import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateArea from './components/CreateArea'
import Footer from './components/Footer'
import Header from './components/Header'
import Note from './components/Note'

function App() {

const[notes,setNote]= useState([]);

  function addNote(newNote){
  setNote((prevNotes)=>{
    return[...prevNotes,newNote];
    
  })

  }

  function deleteNote(id){
    setNote(prevNotes=>{
     return prevNotes.filter((noteItem,index)=>{
        return (id!=index);
      })
    })

  }


  return (
    <div>
      <Header />
      <CreateArea onadd={addNote} />

      {
        notes.map((noteItem,index)=>{
         return <Note 
         key={index}
         id={index}
         title = {noteItem.title}
         content={noteItem.content}
         onDelete={deleteNote}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
