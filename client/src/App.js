import './App.css';
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import { NotesList, NotesInsert, NotesUpdate } from './pages'
import { NotesList } from './pages'


function App() {
  return (
    <div>
     <h1>Note-making</h1>
     <Router>
         
            <Switch>
                <Route path="/Note/list" exact component={NotesList} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
