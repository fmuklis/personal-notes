import React from "react";
import NoteItem from "./NoteItem";
import NoteEmpty from "./NoteEmpty";

function NoteList({ notes, onDelete, onArchive }){
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
                    onArchive={onArchive}
                />
            )}
        </div>
    );
}

export default NoteList;