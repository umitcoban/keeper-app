import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";


function App() {
    const [noteList, setNoteList] = useState([]);
    function addNote(note) {
        if (note.title && note.content)
            setNoteList([...noteList, note]);
            else
            alert("please add correct note");
    }
    function deleteNote(id){
       setNoteList(noteList.filter((item,index)=>{
        return index !== id;
       }));
       console.log(noteList);
    }
    return <div>
        <Header />
        <CreateNote onCreated={addNote} />
        {noteList.map((note, index) => { return <Note key={index} id={index} title={note.title} content={note.content} onDeleted={deleteNote} /> })}
        <Footer />
    </div>
};

export default App;