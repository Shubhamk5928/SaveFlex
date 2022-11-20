import React from "react";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    function handleclick(event) {        
        props.onDelete(props.id);
      }


    function handleupdateclick(event) {
        // event.preventDefault();
        props.onUpdate(props.id , props.title , props.content);
      }
    
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleclick}><DeleteIcon /></button>
            <button onClick={handleupdateclick}><NoteAltIcon /></button>
        </div>
    )
}
export default Note;