import React, {useReducer} from "react";
import {AlertContext} from "./alertContext";
import {AlertReducer} from "./AlertReducer";
import {HIDE, SHOW} from "../types";

export const AlertState = ({children}) => {

    const [state, dispatch] = useReducer(AlertReducer, {status: '', message: '', visible: false})

    const show = (message, status) => {
        dispatch({
            type: SHOW,
            payload: {
                status, message, visible: true
            }
        })
    }

    const hide = () => {
        dispatch({
            type: HIDE
        })
    }

    return (
        <AlertContext.Provider value = {{
            show, hide,
            message: state.message,
            visible: state.visible,
            status: state.status
        }}>
            {children}
        </AlertContext.Provider>
    )
}