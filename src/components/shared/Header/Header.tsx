import "./Header.scss"
import React, {useState} from "react";

const Header = (props: { cityName: string, onCityChange: (name: string) => void }) => {

    const [cityName, setCityName] = useState('');

    const handleCityNameChange = () => {
        props.onCityChange(cityName);
    };

    const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            props.onCityChange(cityName);
        }
    }


    return (
        <header className={'header-container'}>
            <div className={'header-content'}>
                <h2 className={'site-tittle'}>Weather forecast</h2>
                <div className={'get-weather-block'}>
                    <div className={'search-container'}>
                        <input className={'city-input'}
                               type={'text'}
                               placeholder={"Enter city name..."}
                               onChange={e => setCityName(e.target.value)}
                               value={cityName}
                               onKeyDown={(event) => handleEnterPress(event)}
                        />
                        <button
                            onClick={handleCityNameChange}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </header>);
}

export default Header