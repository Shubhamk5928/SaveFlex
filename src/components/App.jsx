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
function updateNote(id){
  var updatedtitle = prompt("Title");
  console.log(updatedtitle);

  Notes.map((note , index)=>{
    console.log(note.title);
    if(index === id){
      console.log("updated");
      note.title = updatedtitle;
      setnotes(prenotes=>{
        return([...prenotes])
      })
    }
  })
}
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      { 
      Notes.map((noteitem,index) => {
        return(<Note key={index} id={index} title={noteitem.title} content={noteitem.content} onDelete={deleteNote} onUpdate={updateNote}/>)
      })
      }
      <Footer />
    </div>
  );
}

export default App;