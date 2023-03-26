import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import EditNote from '../EditNote/EditNote';
import './Note.css';

const Note = ({ id, title, content, deleteNote, editNote }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleDelete = () => {
    deleteNote(id);
  };

  const toggleEditMode = () => {
    setIsEditMode((prevState) => !prevState);
  };

  return (
    <>
      {isEditMode ? (
        <EditNote
          id={id}
          title={title}
          content={content}
          editNote={editNote}
          toggleEditMode={toggleEditMode}
        />
      ) : (
        <div className="note">
          <h1>{title}</h1>
          <p>{content}</p>
          <div className="note-buttons">
            <button className="edit-button" onClick={toggleEditMode}>
              <FaEdit size={28} />
            </button>
            <button className="delete-button" onClick={handleDelete}>
              <FaTrashAlt size={28} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Note;
