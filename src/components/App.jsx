import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Popup from "./Popup";
import db from "../firebase-config";
import {collection , getDocs , addDoc ,updateDoc,deleteDoc, doc } from "firebase/firestore";
import { async } from "@firebase/util";

function App() {



  const[Notes,setnotes]=useState([]);
  const userCollectionrefere = collection(db,"admin");
  const[updatebuttonpopup , setupdatebuttonpopup] = useState(false);
  const[popupboxvalue , setpopupboxvalue] = useState({
    title:"",
    content:""
  })

  useEffect(()=>{
    const getNotes  = async () =>{
      const data = await getDocs(userCollectionrefere);
      console.log("firebase data");
      setnotes(data.docs.map((doc) => ({...doc.data(),id:doc.id , key:doc.id})));
      console.log(data);
    } 
    getNotes();
  } ,[])

  const addNote = async (newNote) => {
    await addDoc(userCollectionrefere , {title : newNote.title , content : newNote.content})
    setnotes(prenotes=>{
    return([...prenotes , newNote]);
    })
  }
  
const deleteNote = async (id)=> {
    const noteDoc = doc(db,"admin",id);
    await deleteDoc(noteDoc);
   
    setnotes(prevnotes => {
      return prevnotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    window.location.reload();
  }


const updateNote = (id , title , content) => {
  // setnotes(prevnotes => {
  //   return prevnotes.filter((noteItem, index) => {
  //     return index == id;
  //   });
  // });
  // console.log("before update popupvalue : ",popupboxvalue.title , popupboxvalue.content);
  setpopupboxvalue({
    title : title,
    content : content
  })
  // console.log("after update popupvalue : ",popupboxvalue.title , popupboxvalue.content);
  setupdatebuttonpopup(true);
  var setLocalStorage = localStorage.setItem("selectednoteid", id);
  console.log("before update : ",id , title , content);
}


const updatedNote = async (newupdatedNote) => {
  var getLocalStorageid = localStorage.getItem("selectednoteid");
  const noteDoc = doc(db , "admin" , getLocalStorageid);
  await updateDoc(noteDoc , {title : newupdatedNote.title , content : newupdatedNote.content});

  // console.log("after update inside updated popupboxvalue : ",popupboxvalue.title , popupboxvalue.content);
  // Notes.map( (note , index) => {
  //   if(index == getLocalStorageid){
  //     note.title = newupdatedNote.title;
  //     note.content = newupdatedNote.content;
  //     setnotes(prenotes =>{
  //       return([...prenotes])
  //     })
  //   }
  // })
  setupdatebuttonpopup(false);
  window.location.reload();
}

return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      { 
      Notes.map((noteitem) => {
        return(<Note id={noteitem.id} key={noteitem.id} title={noteitem.title} content={noteitem.content} onDelete={deleteNote} onUpdate={updateNote}/>)
      })
      }
      {/* { 
      Notes.map((noteitem,index) => {
        return(<Popup key={index} id={index} title={noteitem.title} content={noteitem.content} trigger={updatebuttonpopup} settrigger={updatedNote} />)
      })
      } */}
      <Popup titleboxvalue={popupboxvalue.title} contentboxvalue={popupboxvalue.content} trigger={updatebuttonpopup} settrigger={updatedNote} />
      <Footer />
    </div>
  );
}

export default App;