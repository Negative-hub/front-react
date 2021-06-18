import React, {useContext} from "react";
import {MongoDbContext} from "../context/MongoDB/MongoDbContext";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export const TodoList = ({notes, sort}) => {

    const {deleteNote, changeStatusNote} = useContext(MongoDbContext)

    return (
        <TransitionGroup component='ul' className='list-group'>
            {notes
                .filter(note => (note.status === sort || sort === 'all'))
                .map(note => (
                    <CSSTransition
                        key={note.id}
                        timeout={500}
                        classNames='note'
                    >
                        <li
                            className="list-group-item"
                        >
                            <div className={`list-content${note.status ? ' crossOut' : ''}`}>
                                <strong>{note.title}</strong>
                                <small>{note.date}</small>
                            </div>

                            <div className='list-group-buttons'>
                                <button type="button"
                                        className={`btn btn-${!note.status ? 'outline-' : ''}success btn-sm`}
                                        onClick={() => changeStatusNote(note.id, !note.status)}>
                                    &#128504;
                                </button>

                                <button type="button" className="btn btn-outline-danger btn-sm"
                                        onClick={() => deleteNote(note.id)}>
                                    &times;
                                </button>
                            </div>

                        </li>
                    </CSSTransition>
                ))}
        </TransitionGroup>
    )
}