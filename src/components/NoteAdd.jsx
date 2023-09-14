import React, { useState } from "react";

function NoteAdd({ notePayload }) {
    const titleMaxLength = 50;

    const [note, setNote] = useState({
        title: '',
        body: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote({
            ...note,
            [name]: (name == 'title' && value.length > titleMaxLength ? value.substring(0, titleMaxLength) : value),
        });
    };

    const clearForm = () => {
        setNote({
            title: '',
            body: '',
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        notePayload(note);
        clearForm();
        console.log('Form Data:', note);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="note-input__title__char-limit">Sisa karakter: {titleMaxLength - note.title.length}</p>
            <input
                className="note-input__title" 
                id="title"
                name="title"
                type="text"
                placeholder="Ini adalah judul ..."
                required="" 
                value={note.title}
                onChange={handleChange}>
            </input>
            <textarea 
                className="note-input__body" 
                id="body"
                name="body"
                type="text" 
                placeholder="Tuliskan catatanmu di sini ..."
                value={note.body}
                onChange={handleChange}
                required="">
            </textarea>
            <button type="submit">Buat</button>
        </form>
    );
}

export default NoteAdd;