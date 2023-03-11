
import React, { useState, useEffect } from 'react';
import api from '../api'
import './NotesInsert.css'

function NotesInsert 
{    
    const [note, setNote] = useState([]);

//This is a method that updates the name property of the component's state based on the value of an input 
//field.

//updating state causes component to re-render
//render() method is called

//event handler attached to an input and called when value of input changes
//the event.target object,represents the input element that triggered the event

    const [topic, setTopic] = useState([]);
    const [note_value, setnote] = useState([]);

    

    handleIncludeNote = async () => {
        const { topic,note } = this.state
      //  const arrayTime = time.split('/')
        const payload = { topic,note }

        await api.insertNote(payload).then(res => {
            window.alert(`Note inserted successfully`)
            this.setState({
                topic: '',
                note:''
            })
        })
    }
        //const name=this.state.name

        return (
            <div class="container">
                <h3>Create Note</h3>

                <label>Topic: </label>
                <input
                    type="text"
                    value={topic}
                />

            <label>Note </label>
                <input
                    type="text"
                    value={note}
                    onChange={this.handleChangeInputNote}
                />

                <button onClick={this.handleIncludeNote}>Add Note</button>
                <button href={'/Notes/list'}>Cancel</button>
            </div>
        )
    }

export default NotesInsert