import { Component}from "react";
import React, { useEffect,useState } from 'react';
import WeatherDay from "./WeatherDay"
 class Weather extends Component {
    render() {
        return (
            <>
            {
        this.props.aboutWeather.map(item => {

        return (
            <>
            <WeatherDay weatherdata={item}/>
            </>
        )
    })
}
    </>
)
    }
}
export default Weather;

