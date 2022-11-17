import React from "react";
import {MdDelete} from 'react-icons/md';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    function handleclick() {
        props.onDelete(props.id);
      }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleclick}><DeleteIcon /></button>
        </div>
    )
}
export default Note;