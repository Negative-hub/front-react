import React, {useContext} from "react";
import {WeatherContext} from "../context/Weather/WeatherContext";
import {IconSVG} from './IconSVG'

export const WeatherData = () => {

    const {weather} = useContext(WeatherContext)

    return (
        <div className='weather-content-data'>
            <div className='icon-svg'>
                <IconSVG />
                <span>{weather.description}</span>
            </div>
            <h2>{weather.city}</h2>
            <ul className="list-group">
                <li
                    className="list-group-item weather-item"
                >
                    <span>Температура</span>
                    <span>{Math.round(Number(weather.temp))} °С</span>
                </li>
                <li
                    className="list-group-item weather-item"
                >
                    <span>Oщущается как</span>
                    <span>{Math.round(Number(weather.tempFeelsLike))} °С</span>
                </li>
                <li
                    className="list-group-item weather-item"
                >
                    <span>Давление</span>
                    <span>{Math.round(Number(weather.pressure) * 0.75)} мм рт.ст.</span>
                </li>
                <li
                    className="list-group-item weather-item"
                >
                    <span>Скорость ветра</span>
                    <span>{weather.wind} м/с</span>
                </li>
            </ul>
        </div>
    )
}