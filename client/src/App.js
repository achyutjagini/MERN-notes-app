import './App.css';
import React from 'react'

import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';


//import { NotesList, NotesInsert, NotesUpdate } from './pages'
import { NotesList, NotesInsert } from './pages'


import {HomePage} from './pages'



function App() {
  return (
    <div className="center-style">
     <h1 style={{color:"red"}}>Notes-App</h1>
     <Router>
         
               <Route path="/" exact component={HomePage} />
               <br></br>
                <Link to="/Note/list" className='notelist-first'>NotesList</Link>
                <Link to="/Note/new-note" className='notelist'>New note </Link>
                <Switch>
                <Route path="/Note/list" exact component={NotesList} />
                <Route path="/Note/new-note" exact component={NotesInsert} />
                </Switch>
                

        </Router>
    </div>
  );
}

export default App;
