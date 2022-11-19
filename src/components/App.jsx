import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Popup from "./Popup";

function App() {

  const[Notes,setnotes]=useState([]);

  const[updatebuttonpopup , setupdatebuttonpopup] = useState(false);


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


function updateNote(id , title , content){
  setupdatebuttonpopup(true);
  var setLocalStorage = localStorage.setItem("selectednoteid", id);
  var setLocalStorage = localStorage.setItem("selectednotetitle", title);
  var setLocalStorage = localStorage.setItem("selectednotecontent", content);
  console.log("before update",localStorage.getItem("selectednoteid") , localStorage.getItem("selectednotetitle") , localStorage.getItem("selectednotecontent"))
}


function updatedNote(newupdatedNote){
  var getLocalStorage = localStorage.getItem("selectednoteid");  
  console.log("after update",localStorage.getItem("selectednoteid") , localStorage.getItem("selectednotetitle") , localStorage.getItem("selectednotecontent"));
  Notes.map( (note , index) => {
    if(index == getLocalStorage){
      note.title = newupdatedNote.title;
      note.content = newupdatedNote.content;
      setnotes(prenotes =>{
        return([...prenotes])
      })
    }
  })
  setupdatebuttonpopup(false);
}

{
  var getLocalStoragetitle =  localStorage.getItem("selectednotetitle");
  var getLocalStoragecontent = localStorage.getItem("selectednotecontent");
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
      <Popup title={getLocalStoragetitle} content={getLocalStoragecontent} trigger={updatebuttonpopup} settrigger={updatedNote} />
      <Footer />
    </div>
  );
}

export default App;