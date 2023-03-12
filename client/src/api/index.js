import axios from 'axios'

//Note-router.js linked with this file

//This is the base URL of the server that these
// functions will be making requests to.

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

//It also exports a function called "insertNote" which takes in a payload
// as an argument and makes a "POST" request to the endpoint "/Note"
// with the payload as the body of the request.

export const insertNote = payload => api.post(`/Note`, payload)
export const getAllNotes = () => api.get(`/Notes`)

export const updateNoteById = (id, payload) => api.put(`/Note/${id}`, payload)
export const deleteNote = (topic, note) => api.delete(`/Note/${topic}/${note}`);
//export const deleteNote = (topic, note) => api.delete(`/Note?topic=${topic}&note=${note}`);

export const getNoteById = id => api.get(`/Note/${id}`)

const apis = {
    insertNote,
    getAllNotes,
    updateNoteById,
    deleteNote,
    getNoteById,
}

export default apis