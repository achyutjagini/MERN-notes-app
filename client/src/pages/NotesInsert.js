import React, { useState } from 'react';
import api from '../api';
import './NotesInsert.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';

function NotesInsert()
{
  const [topic, setTopic] = useState('');
  const [note, setNote] = useState('');
  

  const handleChangeInputTopic = (event) => {
    const { value } = event.target;
    setTopic(value);
  };

  const handleChangeInputNote = (event) => {
    const { value } = event.target;
    setNote(value);
  };
  

  const handleIncludeNote = async () => {
    const payload = { topic, note };

    await api.insertNote(payload).then((res) => {
      window.alert(`Note inserted successfully`);
      setTopic('');
      setNote('');
    });
  };

  return (
    <div class="container">
      <h3>Create Note</h3>

      <label>Topic: </label>
      <input type="text" value={topic} onChange={handleChangeInputTopic} />

      <label>Note </label>
      <input type="text" value={note} onChange={handleChangeInputNote} />

      <button onClick={handleIncludeNote}>Add Note</button>
      <Link to="/Note/list">
          <button>Cancel</button>
        </Link>
    </div>
  );
};

export default NotesInsert;
