import React, {useState} from "react";
import {WeatherContext} from "./WeatherContext";
import axios from "axios";

export const WeatherState = ({children}) => {

    const api = process.env.REACT_APP_API_ID
    const url = process.env.REACT_APP_ULR_WEATHER

    const initialState = {
        city: '',
        temp: '',
        tempFeelsLike: '',
        wind: '',
        country: '',
        description: '',
        id: '',
        pressure: ''
    }

    const [history, setHistory] = useState([])
    const [weather, setWeather] = useState(initialState)

    const getWeatherByName = async (name = 'Moscow') => {
        const res = await axios.get(`${url}q=${name}&appid=${api}&units=metric&lang=RU`)
        handle(res.data)
    }

    const getWeatherByLocation = async (lat, lon) => {
        const res = await axios.get(`${url}lat=${lat}&lon=${lon}&appid=${api}&units=metric&lang=RU`)
        handle(res.data)
    }

    const handle = (res) => {
        try {
            const weather = {
                city: res.name,
                temp: res.main.temp,
                tempFeelsLike: res.main.feels_like,
                wind: res.wind.speed,
                country: res.sys.country,
                description: res.weather[0].description,
                id: res.weather[0].id,
                pressure: res.main.pressure
            }
            setWeather(weather)

            setHistory([...history, weather])
        } catch (e) {
            e.message()
        }
    }

    return (
        <WeatherContext.Provider value={{
            getWeatherByName, weather, history, getWeatherByLocation
        }}>
            {children}
        </WeatherContext.Provider>
    )
}