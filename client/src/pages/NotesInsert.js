
import React, { Component } from 'react'
import api from '../api'
import './NotesInsert.css'

class NotesInsert extends Component 
{    
    constructor(props) {
        super(props)

        this.state = {
           topic:"",
           note:""
        }
    }

//This is a method that updates the name property of the component's state based on the value of an input 
//field.

//updating state causes component to re-render
//render() method is called

//event handler attached to an input and called when value of input changes
//the event.target object,represents the input element that triggered the event

    handleChangeInputTopic = async event => {
        const topic = event.target.value
        this.setState({ topic })
    }

    handleChangeInputNote = async event => {
        const note = event.target.validity.valid ?event.target.value: this.state.topic

        this.setState({ note})
    }
    

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

    render() {
        const { topic,note } = this.state
        //const name=this.state.name

        return (
            <div class="container">
                <h3>Create Note</h3>

                <label>Topic: </label>
                <input
                    type="text"
                    value={topic}
                    onChange={this.handleChangeInputTopic}
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
}

export default NotesInsert