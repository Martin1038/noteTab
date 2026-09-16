import api from "../axios/api"

export let getNotes = async () => {
    try {
        let res = await api.get("/")
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}

export let createNote = async (payload) => {
    try {
        let res = await api.post("/", payload)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}

export let getNote = async (id) => {
    try {
        let res = await api.get(`/${id}`)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}

export let updateNote = async (id, payload) => {
    try {
        let res = await api.put(`/${id}`, payload)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}

export let deleteNote = async (id) => {
    try {
        let res = await api.delete(`/${id}`)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}