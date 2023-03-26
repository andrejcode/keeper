import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import './EditNote.css';

const EditNote = (props) => {
  const [note, setNote] = useState({
    title: props.title,
    content: props.content
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const handleEditNode = () => {
    props.editNote(props.id, note.title, note.content);
    props.toggleEditMode();
  };

  return (
    <div className="edit-note">
      <form className="edit-note-form" onSubmit={(e) => e.preventDefault()}>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
        />
        <div className="note-buttons">
          <button className="save-button" onClick={handleEditNode}>
            <FaSave size={28} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
