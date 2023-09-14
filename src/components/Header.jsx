import React from "react";
import NoteSearch from "./NoteSearch";

function Header({searchNote, onSearchChange}) {
    return(
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearch searchNote={searchNote} onSearchChange={onSearchChange} />
        </div>
    );
}

export default Header;