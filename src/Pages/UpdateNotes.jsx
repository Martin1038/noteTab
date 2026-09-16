import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getNote, updateNote } from '../Service/noteService'

const UpdateNotes = () => {

    let { id } = useParams()

    let navigate = useNavigate()

    let [formData, setformData] = useState({
        Title: "",
        Content: ""
    })

    let { Title, Content } = formData

    // Get existing note
    let getData = async () => {
        try {
            let data = await getNote(id)

            setformData({
                Title: data.Title,
                Content: data.Content
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [id])


    // Handle input
    let handleChange = (e) => {

        let { name, value } = e.target

        setformData({
            ...formData,
            [name]: value
        })
    }


    // Update note
    let handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await updateNote(id, formData)

            alert("Note updated successfully")

            navigate("/display")

        }
        catch (err) {

            console.log(err)

            alert("Failed to update note")
        }
    }


    return (
        <div className='updateNotes'>

            <h1>Update Note</h1>

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
                    Update
                </button>

            </form>

        </div>
    )
}

export default UpdateNotes