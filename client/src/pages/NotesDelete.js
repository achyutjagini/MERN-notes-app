import React, { useState } from 'react';
import api from '../api';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';

function NotesDelete()
{
    const [topic, setTopic] = useState('');
    const [note, setNote] = useState('');

    const handleDeleteNote = async () => {
        await api
          .deleteNote(topic, note)
          .then((res) => {
            window.alert(`Note deleted successfully`);
            setTopic('');
            setNote('');
          })
          .catch((error) => {
            console.log(error);
          });
      };
     
      const handleChangeInputTopic = (event) => {
        const { value } = event.target;
        setTopic(value);
      };
    
      const handleChangeInputNote = (event) => {
        const { value } = event.target;
        setNote(value);
      };

      return (
        <div class="container">
          <h3>Delete Note</h3>
    
          <label>Topic: </label>
          <input type="text" value={topic} onChange={handleChangeInputTopic} />
    
          <label>Note </label>
          <input type="text" value={note} onChange={handleChangeInputNote}/>
    
          <button onClick={handleDeleteNote}>Delete Note</button>
          <Link to="/Note/list">
          <button>Cancel</button>
          </Link>
        </div>
      );
    };

export default NotesDelete;