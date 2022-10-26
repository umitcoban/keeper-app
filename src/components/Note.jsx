import React from "react";

function Note(props) {
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className="delete-btn">
            <button onClick={()=>props.onDeleted(props.id)}>Delete</button>
        </div>
    </div>;
}

export default Note;