// @ts-ignore
import humidityIcon from "../assets/imgs/humidity.png";
// @ts-ignore
import windIcon from "../assets/imgs/wind.png";
// @ts-ignore
import cloudCover from "../assets/imgs/cloud-cover.png";
// @ts-ignore
import uvIndex from "../assets/imgs/uv-index.png";
import {WeatherDto} from "../models/dtoTypes";
import {Weather} from "../models/appTypes";


export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfWeek = date.toLocaleDateString('en-US', {weekday: 'long'});
    const month = months[date.getMonth()];
    const day = date.getDate();
    return `${dayOfWeek} ${month} ${day}`;
}

export const returnAdditionalInfo = (weatherInfo: Weather): AdditionalInfo[] => {
    if (weatherInfo.current === undefined) {
        return [];
    }
    let additionalInfoArray = [];
    additionalInfoArray[0] =
        new AdditionalInfo(weatherInfo.current.humidity + " %",
            humidityIcon, "Humidity")
    additionalInfoArray[1] =
        new AdditionalInfo(weatherInfo.current.wind_kph + " km/h",
            windIcon, "Wind")
    additionalInfoArray[2] =
        new AdditionalInfo(String(weatherInfo.current.uv),
            uvIndex, "UV index")
    additionalInfoArray[3] =
        new AdditionalInfo(weatherInfo.current.cloud + "%",
            cloudCover, "Cloud cover")
    return additionalInfoArray;
}

export class AdditionalInfo {

    value: string;
    icon: string;
    tittle: string;

    constructor(value: string, icon: string, tittle: string) {
        this.value = value;
        this.icon = icon;
        this.tittle = tittle;
    }
}

export const mapWeatherDtoToWeather = (weatherDto: WeatherDto): Weather => {
    return {
        location: {
            name: weatherDto.location.name ?? "",
            country: weatherDto.location.country ?? "",
            localtime: weatherDto.location.localtime ?? ""
        },
        current: {
            temp_c: weatherDto.current.temp_c ?? 0,
            wind_kph: weatherDto.current.wind_kph ?? 0,
            humidity: weatherDto.current.humidity ?? 0,
            cloud: weatherDto.current.cloud ?? 0,
            uv: weatherDto.current.uv ?? 0,
            condition: {
                text: weatherDto.current.condition.text ?? "",
                icon: weatherDto.current.condition.icon ?? "",
            }
        }
    }
}
