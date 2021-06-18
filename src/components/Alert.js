import React, {useContext} from "react";
import {AlertContext} from "../context/Alert/alertContext";
import {CSSTransition} from "react-transition-group";

export const Alert = () => {

    const {visible, status, message, hide} = useContext(AlertContext)

    return (
        <CSSTransition
            in={visible}
            timeout={{
                enter: 600,
                exit: 400
            }}
            classNames='alert'
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${status} alert-dismissible`}>
                <strong>Внимание!</strong>&nbsp;{message}
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => hide()}
                />
            </div>
        </CSSTransition>
    )
}