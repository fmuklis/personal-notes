import React from "react";

function NoteBody(){

    return(
        <div className='note-app__body'>
            <NoteInput notePayload={onSubmitHandler}/>
            <h2>Catatan Aktif</h2>
            <NoteList notes={activeNotes}/>
            <h2>Arsip</h2>				
        </div>
    )
}