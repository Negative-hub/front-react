import React, {useContext, useReducer} from "react";
import {MongoDbContext} from "./MongoDbContext";
import {MongoDbReducer} from "./MongoDbReducer";
import axios from 'axios'
import {ADD_NOTE, CHANGE_NOTE, DELETE_NOTE, FETCH_NOTES, LOADING} from "../types";
import {AlertContext} from "../Alert/alertContext";

const url = process.env.REACT_APP_ULR_DB

export const MongoDbState = ({children}) => {

    const initialState = {
        notes: [],
        loading: false,
        status: false
    }

    const [state, dispatch] = useReducer(MongoDbReducer, initialState)
    const {show} = useContext(AlertContext)

    const showLoader = () => {
        dispatch({type: LOADING})
    }

    const fetchNotes = async () => {
        showLoader()

        const res = await axios.get(`${url}/notes.json`)
        try {
            const payload = Object.keys(res.data).map(key => {
                return {...res.data[key], id: key}
            })

            dispatch({type: FETCH_NOTES, payload})
        } catch (e) {
            console.log(e.message)
        }
    }

    const addNote = async (title) => {
        const payload = {
            title,
            date: new Date().toLocaleDateString(),
            status: false
        }
        const res = await axios.post(`${url}/notes.json`, payload)

        dispatch({
            type: ADD_NOTE,
            payload: {
                ...payload, id: res.data.name
            }
        })
    }

    const deleteNote = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({type: DELETE_NOTE, id})

        show('Запись успешно удалена', 'primary')
        //await fetchNotes()
    }

    const changeStatusNote = async (id, status) => {
        await axios.patch(`${url}/notes/${id}.json`, {status})

        dispatch({
            type: CHANGE_NOTE,
            id
        })
    }

    return (
        <MongoDbContext.Provider value={{
            addNote,
            fetchNotes,
            notes: state.notes,
            loading: state.loading,
            deleteNote, changeStatusNote
        }}>
            {children}
        </MongoDbContext.Provider>
    )
}
