import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
function Note(props) {
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className="delete-btn">
            <button onClick={() => props.onDeleted(props.id)}><DeleteIcon /></button>
        </div>
    </div>;
}

export default Note;