import React, { useState } from "react";

function NoteSearch({ searchNote, onSearchChange }) {

    return(
        <div className="note-search">
            <input
                type="text"
                id="searchKeyword"
                name="searchKeyword"
                placeholder="Cari catatan ..." 
                value={searchNote}
                onChange={(e) => onSearchChange(e.target.value)}>
            </input>
        </div>
    );
}

export default NoteSearch;