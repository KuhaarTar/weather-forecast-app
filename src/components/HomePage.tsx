import "./HomePage.scss"
import Header from "./shared/Header/Header";
import React, {useEffect, useState} from "react";
import {getCurrentWeather, getWeaklyForecast} from "../services/apiService";
import CurrentWeatherBlock from "./CurrentWeatherBlock/CurrentWeatherBlock";
import Container from "./Container/Container";
import AdditionalInfoBlock from "./AdditionalInfoBlock/AdditionalInfoBlock";
import {Weather} from "../models/appTypes";
import {FancyLoader} from "./shared/FancyLoader/FancyLoader";
import {ErrorWindow} from "./shared/Error/ErrorWindow";
import {Line} from "react-chartjs-2";

const HomePage = () => {

    const [cityName, setCityName] = useState<string>('Lviv');
    const [weatherInfo, setWeatherInfo] = useState<Weather>();
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const handleCityNameChange = (name: string): void => {
        setCityName(name);
    };

    const handleClose = (): void => {
        setError(null);
        setCityName("Lviv")
    }

    useEffect((): void => {
        getCurrentWeather(cityName)
            .then(response => setWeatherInfo(response))
            .catch(e => {
                setError(e);
                setLoading(false)
            })
            .finally(() => setLoading(false))
        console.log(getWeaklyForecast(cityName))
    }, [cityName]);

    return (
        <div className={'home-page'}>
            <Header cityName={cityName}
                    onCityChange={handleCityNameChange}/>
            {error !== null && <ErrorWindow error={error} onClose={handleClose}/>}
            {isLoading && <FancyLoader/>}
            {weatherInfo === undefined ? "" : (
                <>
                    <CurrentWeatherBlock weatherInfo={weatherInfo}/>
                    <Container>
                        <AdditionalInfoBlock weatherInfo={weatherInfo}/>
                    </Container>
                </>
            )}
        </div>
    )
}

export default HomePage