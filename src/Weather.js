import { Component}from "react";
import React, { useEffect,useState } from 'react';

 class Weather extends Component {
    render() {
        return (
            <>
            {
        this.props.aboutWeather.map(item => {

        return (
            <>
            <li>{item.date} : {item.description}</li>
            </>
        )
    })
}
    </>
)
    }
}
export default Weather;

