import React, {useContext} from "react";
import {WeatherContext} from "../context/Weather/WeatherContext";

export const WeatherStoryList = () => {

    const {history, getWeatherByName} = useContext(WeatherContext)

    return (
        <>
            <h2 className='history-title'>История поиска</h2>
            <ul className="list-group">
                {history.map(city => (
                    <li
                        className="list-group-item history-item"
                        key={city.id}
                        onClick={() => getWeatherByName(city.city)}
                    >
                        <span>Город: {city.city}</span>
                        <span>Страна: {city.country}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}