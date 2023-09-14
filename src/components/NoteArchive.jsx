import React from 'react';
 
function NoteArchive({ id, onArchive }) {
    return <button className='note-item__archive-button' onClick={() => onArchive(id)}>Arsipkan</button>
}
 
export default NoteArchive;