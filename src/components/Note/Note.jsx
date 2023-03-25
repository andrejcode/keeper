import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import './Note.css';

const Note = ({ id, title, content, deleteNote }) => {
  // TODO: Implement edit note
  // const [editMode, setEditMode] = useState(false);

  const handleDelete = () => {
    deleteNote(id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="note-buttons">
        {/* <button className="edit-button" onClick={handleEdit}>
          <FaEdit size={28} />
        </button> */}
        <button className="delete-button" onClick={handleDelete}>
          <FaTrashAlt size={28} />
        </button>
      </div>
    </div>
  );
};

export default Note;
