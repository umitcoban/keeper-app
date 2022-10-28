import React, { useState } from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';
const customStyle = {
    addNoteIcon: {
        color: "white",
        textAlign: "center"
    }
};
function CreateNote(props) {
    const [note, setNote] = useState({ title: "", content: "" });
    const [isOpenedPopup, setIsOpenedPopup] = useState(false);
    function handlePopup() {
        setIsOpenedPopup(true);
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevVal => {
            return { ...prevVal, [name]: value };
        });
    }

    function handleClick() {
        props.onCreated(note);
        setNote({ title: "", content: "" });
        setIsOpenedPopup(false);
    }

    return <div className="create-note">
        <Grid container>
            <Grid container>
                <Grid item xs={12} lg={12}>
                    {isOpenedPopup ? <input onChange={handleChange} placeholder="Enter Title" name="title" value={note.title}></input> : null}
                </Grid>
                <Grid item xs={12} lg={12}>
                    <textarea onClick={handlePopup} onChange={handleChange} rows={isOpenedPopup ? 4 : 2} cols={50} placeholder="Take a Note" name="content" value={note.content}></textarea>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Zoom in={isOpenedPopup} timeout={1000}>
                        <Fab onClick={handleClick}><NoteAddIcon style={customStyle.addNoteIcon} /></Fab>
                    </Zoom>
                </Grid>
            </Grid>
        </Grid>
    </div>
}

export default CreateNote;