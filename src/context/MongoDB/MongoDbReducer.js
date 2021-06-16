import {ADD_NOTE, CHANGE_NOTE, DELETE_NOTE, FETCH_NOTES, LOADING} from "../types";

const handlers = {
    DEFAULT: state => state,
    [LOADING]: state => (
        {...state, loading: true}
    ),
    [FETCH_NOTES]: (state, {payload}) => (
        { ...state, notes: payload, loading: false}
    ),
    [ADD_NOTE]: (state, {payload}) => (
        {...state, notes: [...state.notes, payload], loading: false}
    ),
    [DELETE_NOTE]: (state, {id}) => (
        {...state, notes: state.notes.filter(note => note.id !== id)}
    ),
    [CHANGE_NOTE]: (state, {id}) => (
        {...state, notes: state.notes.map(note => (
            note.id === id
            ? {...note, status: !note.status}
            : {...note}
            ))}
    )
}

export const MongoDbReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}