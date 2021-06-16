import React, {useState, useContext} from "react";
import {MongoDbContext} from "../context/MongoDB/MongoDbContext";
import {AlertContext} from "../context/Alert/alertContext";

export const Form = ({handle}) => {

    const {addNote} = useContext(MongoDbContext)
    const {show} = useContext(AlertContext)

    const [value, setValue] = useState('')

    const handler = (event) => {
        event.preventDefault()

        if(value.trim()) {
            addNote(value)
            setValue('')
            show('Запись добавлена в базу данных', 'success')
        } else {
            show('Введите задачу', 'warning')
        }
    }

    return (
        <form className='form' onSubmit={handler}>
            <h1>ToDo App</h1>
            <div className="mb-3 form__container">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder='Enter some task'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />

                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option onClick={() => handle()}>All</option>
                    <option onClick={() => handle(true)}>Completed</option>
                    <option onClick={() => handle(false)}>In work</option>
                </select>

            </div>
        </form>
    )
}