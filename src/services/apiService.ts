import axios, {AxiosResponse} from "axios";
import {API_KEY, CURRENT_WEATHER, FORECAST} from "../assets/constants/apiUrls";
import {Weather} from "../models/appTypes";
import {mapWeatherDtoToWeather} from "./mapperService";
import {WeatherDto} from "../models/dtoTypes";

export const getCurrentWeather = async (cityName: string): Promise<Weather> => {
    try {
        const response: AxiosResponse<WeatherDto> = await axios.get(CURRENT_WEATHER,
            {params: {key: API_KEY, q: cityName, aqi: 'no'}});
        return mapWeatherDtoToWeather(response.data)
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const getWeaklyForecast = async (cityName: string) => {
    try {
        const response = await axios.get(FORECAST,
            {params: {key: API_KEY, q: cityName, days: 7, aqi: 'no', alerts: 'no'}})
        return response.data.forecast.forecastday.hour;
    } catch (e) {
        console.log(e)
        throw e;
    }
}
