import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getNotes, deleteNote } from '../Service/noteService'


const DisplayNotes = () => {

    let [notes, setNotes] = useState([])

    let getData = async () => {
        try {
            let data = await getNotes()
            setNotes(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    // Delete function
    let handleDelete = async (id) => {

        let confirmDelete = window.confirm(
            "Are you sure you want to delete this note?"
        )

        if (confirmDelete) {

            try {

                await deleteNote(id)

                alert("Note delete successfully")

                getData()

            }
            catch (err) {

                console.log(err)

            }
        }
    }


    return (
        <div className='displayNotes'>

            <h1>My Notes</h1>

            {
                notes.map((note) => (

                    <div className='note' key={note.id}>

                        <h2>{note.Title}</h2>

                        <p>{note.Content}</p>

                        {/* EDIT */}

                        <NavLink to={`/edit/${note.id}`}>
                            Edit
                        </NavLink>


                        {/* DELETE */}

                        <button onClick={() => handleDelete(note.id)}>
                            Delete
                        </button>

                    </div>

                ))
            }

        </div>
    )
}

export default DisplayNotes