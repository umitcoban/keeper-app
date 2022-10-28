import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import CustomAlert from "./CustomAlert";
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
function App() {
  const [noteList, setNoteList] = useState([]);
  const [isCorrectNote, setIsCorrectNote] = useState(false);

  function addNote(note) {
    if (note.title && note.content) {
      setNoteList([...noteList, note]);
      setIsCorrectNote(false);
    }
    else
      setIsCorrectNote(true);
  }
  function deleteNote(id) {
    setNoteList(noteList.filter((item, index) => {
      return index !== id;
    }));
  }
  return <div>
    <Grid container>
      <Grid item xs={12} lg={12}>
        <Header />
      </Grid>
      <Grid item xs={12} lg={12}>
        <CustomAlert isShow={isCorrectNote} message="Invalid Note! Please Check Youre Note!" severity="error" title="Error" variant="filled" />
        <CreateNote onCreated={addNote} />
      </Grid>
      <Grid container spacing={5} xs={12} lg={12}>
        {noteList.map((note, index) => { return <Grid xs={12} sm={6} md={4}  lg={3}> <Note key={index} id={index} title={note.title} content={note.content} onDeleted={deleteNote} /> </Grid> })}
      </Grid>
      <Grid item xs={12} lg={12}>
        <Footer />
      </Grid>
    </Grid>
  </div>
};

export default App;