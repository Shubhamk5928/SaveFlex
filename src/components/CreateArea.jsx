import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props){

    const [isExpanded , setExpanded] = useState(false);
    function expand(){
        setExpanded('true');
    }
    const [note , setNote] = useState({
        title  : "",
        content: ""
    });

    function handlechange(event){
        const {name , value} =  event.target;
        setNote(preNote => {
            return({
                ...preNote,
                [name] : value
            })
        })
    }

    function submitnode(event){
        event.preventDefault();
        setNote({
            title  : "",
            content: ""
        });
        return(props.onAdd(note));
    }


    return(
        <form className="create-note">
            {isExpanded && <input name='title'  onChange={handlechange} value={note.title} placeholder='Title'></input>}
            <textarea name='content' onClick={expand} onChange={handlechange}  value={note.content} placeholder='Take a note...' rows={isExpanded ? "3" : "1"}></textarea>
            <Zoom in={isExpanded}>
              <Fab onClick={submitnode}><AddIcon /></Fab>  
            </Zoom>
        </form>
    )
}
export default CreateArea;