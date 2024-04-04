import './AdditionalInfoBlock.scss'
import React, {useEffect, useState} from "react";
import {InfoCard} from "./InfoCard/InfoCard";
import {AdditionalInfo, returnAdditionalInfo} from "../../services/mapperService";
import {AdditionalContentWrapper} from "./AdditionalContentWrapper/AdditionalContentWrapper";
import {Weather} from "../../models/appTypes";

const AdditionalInfoBlock = (props: { weatherInfo: Weather }) => {

    const [weatherInfo, setWeatherInfo]
        = useState<Weather>(props.weatherInfo)
    let [additionalInfo, setAdditionalInfo]
        = useState<AdditionalInfo[]>([]);
    useEffect(() => {
        setWeatherInfo(props.weatherInfo)
        setAdditionalInfo(returnAdditionalInfo(weatherInfo));
        console.log(additionalInfo)
    }, [props.weatherInfo]);

    return (
        <div className={'additional-block-wrapper'}>
            <AdditionalContentWrapper>
                {weatherInfo && (
                    additionalInfo.map((info, index) => {
                        return (
                            <InfoCard
                                key={index}
                                value={info.value}
                                tittle={info.tittle}
                                icon={info.icon}
                            />
                        );
                    })
                )}
            </AdditionalContentWrapper>
        </div>
    )
}

export default AdditionalInfoBlock