import Header from './components/Header';
import AddNote from './components/AddNote';
import Note from './components/Note';
import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  };

  return (
    <div className="App">
      <Header />
      <AddNote addNote={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            deleteNote={deleteNote}
          />
        );
      })}
    </div>
  );
};

export default App;
