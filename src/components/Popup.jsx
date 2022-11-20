import React,{useState} from 'react'
import Zoom from '@mui/material/Zoom';

    function Popup(props) {
    const [popupnote , setpopupNote] = useState({
        title  : props.titleboxvalue,
        content: props.contentboxvalue
    });
     
    // setNote({
    //     title  : props.title,
    //     content: props.content,
    // });

    function handlechange(event){
        const {name , value} =  event.target;
        setpopupNote(preNote => {
            return({
                ...preNote,
                [name] : value
            })
        })
    }
    
    function handleupdatedclick(event) { 
        event.preventDefault();
        props.settrigger(popupnote);
    }

  return (props.trigger) ? (<form className="update-note">
             <div className='update-note-inner'>
             {/* <label>Title</label> */}
             <input  value={popupnote.title} name='title' onChange={handlechange} placeholder='Title'></input>
             {/* <label>content</label> */}
             <textarea  value={popupnote.content} name='content' onChange={handlechange} placeholder='Take a note...' rows={3}></textarea>
             <button onClick={handleupdatedclick} >update</button>
             </div>
        </form>) : ""
}

export default Popup;