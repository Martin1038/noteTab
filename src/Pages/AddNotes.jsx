import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createNote } from '../Service/noteService'

const AddNotes = () => {

    let navigate = useNavigate()

    let [formData, setformData] = useState({
        Title: "",
        Content: ""
    })

    let { Title, Content } = formData

    let handleChange = (e) => {
        let { name, value } = e.target

        setformData({
            ...formData,
            [name]: value
        })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await createNote(formData)

            alert("Note uploaded successfully")

            navigate("/display")
        }
        catch (err) {
            console.log(err)
            alert("Failed to upload note")
        }
    }

    return (
        <div className='addNotes'>

            <h1>Welcome to Note App</h1>
            <p>Store your notes in our application</p>

            <form onSubmit={handleSubmit}>

                <label>Title</label>

                <input
                    type="text"
                    name="Title"
                    value={Title}
                    onChange={handleChange}
                    placeholder="Enter the title"
                />

                <label>Content</label>

                <textarea
                    name="Content"
                    value={Content}
                    onChange={handleChange}
                    placeholder="Enter the content"
                ></textarea>
                

                <button type="submit">
                    Upload
                </button>

            </form>

        </div>
    )
}

export default AddNotes