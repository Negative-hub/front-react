import React, {useContext, useState} from "react";
import {WeatherContext} from "../context/Weather/WeatherContext";

export const FormWeather = () => {

    const [value, setValue] = useState('')

    const {getWeatherByName, clearHistory} = useContext(WeatherContext)

    return (
        <form
            className='form-weather'
            onSubmit={(event) => {
            event.preventDefault()
            getWeatherByName(value)
            setValue('')
        }}>
                <input
                    type="text"
                    className="form-control form-weather-input"
                    placeholder='Enter city...'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                <button
                    type='button'
                    className='btn btn-danger btn-sm'
                    title='Очистить список'
                    onClick={() => clearHistory()}
                >
                    &times;
                </button>
        </form>
    )
}