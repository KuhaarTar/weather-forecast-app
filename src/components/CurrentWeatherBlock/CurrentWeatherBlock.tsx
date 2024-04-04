import './CurrentWeatherBlock.scss'
import React, {useEffect, useState} from "react";
import {formatDate} from "../../services/mapperService";
import {Weather} from "../../models/appTypes";

const CurrentWeatherBlock = (props: { weatherInfo: Weather }) => {
    const [weatherInfo, setWeatherInfo] =
        useState<Weather>(props.weatherInfo);

    useEffect(() => {
        setWeatherInfo(props.weatherInfo);
    }, [props.weatherInfo]);

    return (
        <section className={'current-weather-wrapper'}>
            {weatherInfo && weatherInfo.current && weatherInfo.location && (
                <div className={'current-weather'}>
                    <div className={'left-weather-block'}>
                        <img src={weatherInfo.current.condition.icon} alt={'Weather icon'}/>
                        <p className={'temp'}>{weatherInfo.current.temp_c} °</p>
                        <p className={'location'}>{weatherInfo.location.name} , {weatherInfo.location.country}</p>
                    </div>
                    <div className={'right-weather-block'}>
                        <p>{weatherInfo.current.condition.text}</p>
                        <p>{formatDate(weatherInfo.location.localtime)}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
export default CurrentWeatherBlock;