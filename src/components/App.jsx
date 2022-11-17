import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const[Notes,setnotes]=useState([]);

  function addNote(newNote){
    setnotes(prenotes=>{
      return([...prenotes , newNote])
    })
  }
  
function deleteNote(id) {
    setnotes(prevnotes => {
      return prevnotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      { 
      Notes.map((noteitem,index) => {
        return(<Note key={index} id={index} title={noteitem.title} content={noteitem.content} onDelete={deleteNote}/>)
      })
      }
      <Footer />
    </div>
  );
}

export default App;