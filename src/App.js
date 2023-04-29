import Header from './components/Header/Header';
import AddNote from './components/AddNote/AddNote';
import Note from './components/Note/Note';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest';

const App = () => {
  const API_URL = 'http://localhost:3500/notes';

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error('Unable to fetch data');

        const notesList = await response.json();
        setNotes(notesList);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async (note) => {
    const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
    const newNote = { id, ...note };
    setNotes((prevNotes) => [...prevNotes, newNote]);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const deleteNote = async (id) => {
    setNotes((prevNotes) => prevNotes.filter((noteItem) => noteItem.id !== id));

    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  const editNote = async (id, title, content) => {
    const notesList = notes.map((note) =>
      note.id === id ? { ...note, title: title, content: content } : note
    );
    setNotes(notesList);

    const myNote = notesList.filter((note) => note.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: myNote[0].title,
        content: myNote[0].content
      })
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <AddNote addNote={addNote} />
      <main>
        {isLoading && <p className="loading-message">Loading notes...</p>}
        {fetchError && (
          <p className="error-message">{`Error: ${fetchError}`}</p>
        )}
        {!fetchError &&
          !isLoading &&
          notes
            .filter(
              (noteItem) =>
                noteItem.title.toLowerCase().includes(search.toLowerCase()) ||
                noteItem.content.toLowerCase().includes(search.toLowerCase())
            )
            .map((noteItem) => {
              return (
                <Note
                  key={noteItem.id}
                  id={noteItem.id}
                  title={noteItem.title}
                  content={noteItem.content}
                  deleteNote={deleteNote}
                  editNote={editNote}
                />
              );
            })}
      </main>
    </div>
  );
};

export default App;
