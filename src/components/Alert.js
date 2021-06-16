import React, {useContext} from "react";
import {AlertContext} from "../context/Alert/alertContext";

export const Alert = () => {

    const {visible, status, message, hide} = useContext(AlertContext)

    return (
        <div className={`alert alert-${status} alert-dismissible fade ${visible ? 'show' : ''}`}>
            <strong>Внимание!</strong>&nbsp;{message}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => hide()}
            />
        </div>
    )
}