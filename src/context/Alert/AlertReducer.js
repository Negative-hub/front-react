import {SHOW, HIDE} from "../types";

const handlers = {
    DEFAULT: state => state,
    [SHOW]: (state, {payload}) => (
        {...state, ...payload}
    ),
    [HIDE]: () => ({visible: false})
}

export const AlertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}