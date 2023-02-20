import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const Note = ({ id, title, content, deleteNote }) => {
  const handleDelete = () => {
    deleteNote(id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button className="delete-button" onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Note;
