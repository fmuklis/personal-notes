import React from "react";
import NoteAdd from "./NoteAdd";

function NoteInput({ notePayload }) {
    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            <NoteAdd notePayload={notePayload}/>
        </div>        
    );
}

export default NoteInput;