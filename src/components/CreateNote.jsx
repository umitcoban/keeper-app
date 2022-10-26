import React, {useState} from "react";


function CreateNote(props){
    const [note, setNote] = useState({title:"",content:""});

    function handleChange (event) { 
        const {name, value} = event.target;
        setNote(prevVal=>{
            return {...prevVal,[name]:value};
        });
     }

     function handleClick(){
        props.onCreated(note);
        setNote({title:"",content:""});
     }

    return <div className="create-note">
        <input onChange={handleChange} placeholder="Enter Title" name="title" value={note.title}></input>
        <textarea onChange={handleChange} rows={4} cols={50} placeholder="Enter Content" name="content" value={note.content}></textarea>
        <button onClick={handleClick}>Add</button>
    </div>
}

export default CreateNote;