import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteAction from "./NoteAction";

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive, onMove }){
    return (
        <div className="note-item">
            <NoteItemContent
                title={title}
                body={body}
                createdAt={createdAt}
            />
            <NoteAction
                id={id}
                archived={archived}
                onDelete={onDelete}
                onArchive={onArchive} 
                onMove={onMove}
            />
        </div>        
    );
}

export default NoteItem;