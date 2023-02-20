import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddNote = (props) => {
  const [note, setNote] = useState({ title: '', content: '' });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const submitNote = () => {
    if (note.title !== '' && note.content !== '') {
      props.addNote(note);
      setNote({ title: '', content: '' });
      setIsExpanded(false);
    }
  };

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <form className="add-note" onSubmit={(e) => e.preventDefault()}>
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        {isExpanded && (
          <button className="add-button" onClick={submitNote}>
            <FaPlus />
          </button>
        )}
      </form>
    </div>
  );
};

export default AddNote;
