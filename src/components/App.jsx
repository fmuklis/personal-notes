import React, {useState, useEffect} from 'react';
import Header from './Header';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import NoteListArchive from './NoteListArchive';
import { 
	getAllNotes,
	getActiveNotes,
	getArchivedNotes,
	deleteNote,
	editNote,
	getNote,
	getNotes,
	archiveNote,
	unarchiveNote,
	addNote } from '../utils/local-data';

function App() {
	const [searchKeyword, setSearchKeyword] = useState('');

    // opsi initializes data
	const [activeNotes, setActiveNotes] = useState(getActiveNotes());
	const [archiveNotes, setArchiveNotes] = useState(getArchivedNotes());

    // const [activeNotes, setActiveNotes] = useState([]);
	// const [archiveNotes, setArchiveNotes] = useState([]);

    // useEffect(() => {
    //     const retrievedActiveNotes = getActiveNotes();

    //     setActiveNotes(retrievedActiveNotes);
    // }, []);

    // useEffect(() => {
    //     const retrievedArchiveNotes = getArchivedNotes();

    //     setArchiveNotes(retrievedArchiveNotes);
    // }, []);	

    const onSubmitHandler = (newNote) => {
	 	const noteResponse = addNote({
			title: newNote.title,
			body: newNote.body
		});

		setActiveNotes([...activeNotes, noteResponse]);
    }

    const onSearchHandler = (searchKeyword) => {
		const activeNotes = getActiveNotes();
		const archiveNotes = getArchivedNotes();

		setSearchKeyword(searchKeyword);

		if(searchKeyword.length > 0) {
			const filteredActiveNote = activeNotes.filter((note) => 
					note.title.toLowerCase().includes(searchKeyword.toLowerCase()));
			const filteredArchiveNote = archiveNotes.filter((note) => 
					note.title.toLowerCase().includes(searchKeyword.toLowerCase()));					

			setActiveNotes(filteredActiveNote);
			setArchiveNotes(filteredArchiveNote);
			return;
		}

		setActiveNotes(activeNotes);
		setArchiveNotes(archiveNotes);
   	}

	const onDeleteHandler = (id) => {
		deleteNote(id);
		
		const activeNotes = getActiveNotes();
		const archiveNotes = getArchivedNotes();

		setActiveNotes(activeNotes);
		setArchiveNotes(archiveNotes);
	}
	
	const onArchiveHandler = (id) => {
		archiveNote(id);

		const activeNotes = getActiveNotes();
		const archiveNotes = getArchivedNotes();

		setActiveNotes(activeNotes);
		setArchiveNotes(archiveNotes);
	}
	
	const onMoveHandler = (id) => {
		unarchiveNote(id);

		const activeNotes = getActiveNotes();
		const archiveNotes = getArchivedNotes();

		setActiveNotes(activeNotes);
		setArchiveNotes(archiveNotes);
	}

    return (
        <>
            <Header searchNote={searchKeyword} onSearchChange={onSearchHandler}/>
			<div className='note-app__body'>
				<NoteInput notePayload={onSubmitHandler}/>
				<h2>Catatan Aktif</h2>
            	<NoteList
					notes={activeNotes}
					onDelete={onDeleteHandler}
					onArchive={onArchiveHandler}/>
				<h2>Arsip</h2>
				<NoteListArchive
					notes={archiveNotes}
					onDelete={onDeleteHandler}
					onMove={onMoveHandler}/>		
			</div>
        </>
    );
}

export default App;
