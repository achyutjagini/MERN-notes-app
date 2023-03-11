
import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class NotesInsert extends Component 
{    
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            topic: '',
        }
    }

//This is a method that updates the name property of the component's state based on the value of an input 
//field.

//updating state causes component to re-render
//render() method is called

//event handler attached to an input and called when value of input changes
//the event.target object,represents the input element that triggered the event

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputTopic = async event => {
        const topic = event.target.validity.valid ?event.target.value: this.state.topic

        this.setState({ topic })
    }
    

    handleIncludeNote = async () => {
        const { name,topic } = this.state
      //  const arrayTime = time.split('/')
        const payload = { name,topic }

        await api.insertNote(payload).then(res => {
            window.alert(`Note inserted successfully`)
            this.setState({
                name: '',
                topic:''
            })
        })
    }

    render() {
        const { name, topic } = this.state
        //const name=this.state.name

        return (
            <div>
            <Wrapper>
                <Title>Create Note</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

            <Label>Topic </Label>
                <InputText
                    type="text"
                    value={topic}
                    onChange={this.handleChangeInputTopic}
                />



                <Button onClick={this.handleIncludeNote}>Add Note</Button>
                <CancelButton href={'/Notes/list'}>Cancel</CancelButton>
            </Wrapper>
            </div>
        )
    }
}

export default NotesInsert