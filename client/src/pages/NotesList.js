import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'
import 'react-table/react-table.css'

//This line of code is importing the CSS styles for the React Table library. 
//The React Table library is a lightweight, fast, and 
//extendable data grid built for 
//React. By importing the CSS styles for the library, you ensure that the table
//will be styled correctly when it is rendered in your application.


//code- React class component named "NotesList" 
//which renders a table of notes using the "react-table" library.
/*
This code defines 3 styled components, Wrapper and Update, Delete.
The styled.div syntax is used to create a new component that 
is styled with the CSS rules defined within the template literal.

The Wrapper component is styled with a padding of 0 pixels on the top and bottom,
 and 40 pixels on the left and right.

The Update component is styled with a yellow-orange color and
 a cursor that changes to a pointer when hovered over.

The Delete component is styled with a red color and a cursor that 
changes to a pointer when hovered over. These components can then be
used in the JSX of a React component to apply these styles to a specific element.

*/


const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
/*
This code defines a UpdateMovie class that extends the React Component class. 
The UpdateMovie class has a single method, updateUser, which is passed as an event
handler to the onClick prop of the Update styled component.

When the Update component is clicked, the updateUser method is called, which
first prevents the default behavior of the event (to prevent the page from refreshing),
and then sets the browser's location to a URL that includes the ID of the movie to be 
updated, which is passed down as a prop.

The render method of this class return the Update component with the 
onClick event listener attached to it.

It would be used within other component and pass the id of the movie as 
props to UpdateMovie component, so that the correct movie can be updated.

*/

/*
class UpdateMovie extends Component {

    updateUser = event => {
        event.preventDefault()
        
        //goes to notesUpdate component,see app/index.js
        window.location.href = `/notes/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}
*/

/*This code defines a DeleteMovie class that extends the React Component class. The
DeleteMovie class has a single method, deleteUser, 
which is passed as an event handler to the 
onClick prop of the Delete styled component.

When the Delete component is clicked, the deleteUser method is called, which first prevents 
the default behavior of the event (to prevent the page from refreshing), and then it shows a 
confirm dialog to the user asking if they want to delete the movie permanently. If the user
confirms,it calls the delete movie by id API and then reloads the whole page.

The render method of this class return the Delete component with the onClick event 
listener attached to it.

It would be used within other component and pass the id of the movie as props to
DeleteMovie component, so that the correct movie can be deleted.

It should be noted that this will cause the whole page to refresh and may cause flicker
in the user interface. And it's not the recommended way of handling navigation in Single 
Page Applications. You may want to consider using a state management library such as Redux
or MobX to handle the state of your application, and then use the state to determine what
should be displayed on the page rather than reloading the whole page.
*/

/*
class DeleteMovie extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the movie ${this.props.id} permanently?`,
            )
        ) {
            api.deleteNoteById(this.props.id)
            window.location.reload()
        }
    }

    //delete onlick attach delete user event of same component
    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}
*/
/*
This code defines a React component called "NotesList" that extends the "Component" class.
The component has a constructor that sets the initial state of the component, which includes an
empty array of notes, an empty array of columns, and a boolean value indicating whether the 
component is currently loading data.

The componentDidMount lifecycle method is used to fetch data from an API when the component is
first rendered. The method sets the component's "isLoading" state to true, then calls 
the "api.getAllnotes()"method and waits for the promise to resolve. Once the promise
 resolves, it updates the component's 
state with the received data and sets "isLoading" to false.

In the component's render method, it destructures the component's state to extract the "notes" 
and "isLoading" variables. It then defines an array of column objects that will be used 
to generate a table using the "ReactTable" component. The component then checks if there are 
any notes in the state, and if there are none, it sets "showTable" to false. Finally, it 
returns JSX that renders the "ReactTable" component inside of a "Wrapper" component, only if 
"showTable" is true. The table will show data of movie name, rating, time and have functionality 
to delete and update movie as well.
*/

class NotesList extends Component {
    constructor(props) {
        super(props)
        //isLoading - boolean value indicating if component is currently loading data
        this.state = {
            notes: [],
            columns: [],
            isLoading: false,
        }
    }
    
    //see above for explanation
    componentDidMount = async () => {
        //isLoading - boolean value indicating if component is currently loading data
        this.setState({ isLoading: true })

        await api.getAllNotes().then(notes => 
            {
            this.setState({
                notes: notes.data.data,
                isLoading: false,
            })
        })
    }



    render() {
        const { notes, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'topic',
                accessor: 'topic',
                filterable: true,
            },
            {
                Header: 'note',
                accessor: 'note',
               // Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]
    //  This code is checking if the notes array is empty and if it is, it sets 
    //   the showTable variable  to false.If showTable is true, it renders 
     //   the <ReactTable> component, otherwise it does not.
        
        let showTable = true
        if (!notes.length) {
            showTable = false
        }

        return (
            <div>
                <h1>abcd</h1>
                {showTable && (
                    <ReactTable
                        data={notes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
        </div>
        )
    }
}

export default NotesList;
