import {Header, HeaderTitle, SearchContainer, WeatherIcon, WeatherWrapper} from "./style";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {ButtonContainer} from "../Clients/Facebook/style";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import {useState} from "react";

function Weather() {
    const [loading, setLoading] = useState<boolean>(false);
    const [cityName, setCityName] = useState<string>("");
    const [weatherData, setWeatherData] = useState<any>({})
    const APIKEY='655081d01009e61fd51f785f145b376b'

    const { name, main } = weatherData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value);
    }

    const getWeather = async () => {
        try {
            setLoading(true);
            if (cityName.length === 0) return
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`);
            const result = await response.json();
            if (!response.ok) {
                throw Object.assign(new Error('API Error'), {
                    response: result
                })
            } else {
                setWeatherData(result)
                setLoading(false);
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    const WeatherIconComponent = () => {
        return (
            weatherData && weatherData.weather ? (
                <WeatherIcon
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt='weather icon'
                    className='weather-icon'/>
            ) : (
                <p>No weather data available</p>
            )
        );
    }


    const handleSearch = () => {
        getWeather();
    }

    return (
        <WeatherWrapper>
            <Header>
                <HeaderTitle>
                Weather App
                </HeaderTitle>
            </Header>
            <SearchContainer>
                <Input placeholder="Colorado" value={cityName} getValue={handleInputChange}/>
                <ButtonContainer>
                    <Button name="Search" handlerButton={handleSearch}/>
                </ButtonContainer>
            </SearchContainer>
            <WeatherInfo name={name} main={main} weatherIcon={<WeatherIconComponent/>} visible/>
            {/*<WeatherError/>*/}
        </WeatherWrapper>
    )
}

export default Weather;
