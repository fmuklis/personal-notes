import React from "react";
import NoteItem from "./NoteItem";
import NoteEmpty from "./NoteEmpty";

function NoteListArchive({ notes, onDelete, onMove }){
    if (notes.length <= 0) return <NoteEmpty/>;
    
    return (
        <div className="notes-list">
            {notes.map((note) => 
                <NoteItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    createdAt={note.createdAt}
                    archived={note.archived}
                    onDelete={onDelete}
                    onMove={onMove}
                />
            )}
        </div>
    );
}

export default NoteListArchive;