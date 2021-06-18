import React, {useContext, useState} from "react";
import {WeatherContext} from "../context/Weather/WeatherContext";

export const FormWeather = () => {

    const [value, setValue] = useState('')

    const {getWeatherByName} = useContext(WeatherContext)

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            getWeatherByName(value)
            setValue('')
        }}>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder='Enter city...'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </div>
        </form>
    )
}