import React, {useContext, useEffect} from "react";
import {FormWeather} from "../components/FormWeather";
import {WeatherData} from "../components/WeatherData";
import {WeatherStoryList} from "../components/WeatherStoryList";
import {WeatherContext} from "../context/Weather/WeatherContext";

export const Weather = () => {

    const {getWeatherByLocation} = useContext(WeatherContext)

    useEffect(() => {
        const geo = navigator.geolocation

        geo.getCurrentPosition(props => {
            getWeatherByLocation(props.coords.latitude, props.coords.longitude)
        })
        // eslint-disable-next-line
    }, [])

    return (
        <section className='weather'>
            <div className='container weather'>
                <div>
                    <h1>Weather</h1>
                </div>
                <div className='weather-content'>
                    <WeatherData />

                    <div className='weather-content-search'>
                        <FormWeather />
                        <WeatherStoryList history={[{id: 1, name: 'Moscow', country: 'Russia'}]}/>
                    </div>
                </div>
            </div>
        </section>
    )
}