import React from 'react';
import NoteDelete from './NoteDelete'; 
import NoteArchive from './NoteArchive';
import NoteMove from './NoteMove';

function NoteAction({ id, archived, onDelete, onArchive, onMove }) {
    if (archived) {
        return (
            <div className='note-item__action'>
                <NoteDelete id={id} onDelete={onDelete}/>
                <NoteMove id={id} onMove={onMove}/>
            </div>
        );
    }

    return (
        <div className='note-item__action'>
            <NoteDelete id={id} onDelete={onDelete}/>
            <NoteArchive id={id} onArchive={onArchive}/>
        </div>
    );
}
 
export default NoteAction;