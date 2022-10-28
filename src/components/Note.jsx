import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Fade from '@material-ui/core/Fade';
function Note(props) {
    return <Fade in={true} timeout={{enter:1000}}><div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className="delete-btn">
            <button onClick={() => props.onDeleted(props.id)}><DeleteIcon /></button>
        </div>
    </div></Fade>;
}

export default Note;