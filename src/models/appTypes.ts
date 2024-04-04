import {ReactNode} from "react";

interface Condition {
    text: string;
    icon: string;
}

export interface CurrentWeather {
    temp_c: number;
    wind_kph: number;
    humidity: number;
    cloud: number;
    uv: number;
    condition: Condition;
}

export interface Location {
    name: string,
    country: string,
    localtime: string
}


export interface Weather {
    location: Location,
    current: CurrentWeather
}

export interface ChildrenProps {
    children: ReactNode
}

export interface HourForecast {
    time: string,
    temp_c: number,
}
