import {
    TemperatureIconContainer,
    City,
    WeatherContainer,
    WeatherFeelsLike,
    Degree, WeatherDegree, FeelsLikeDegree,
    IconTemperature,
    WeatherWrapper,
    Title, DegreeContainer,
} from "./style";
import {WeatherInfoProps} from "./types";

function WeatherInfo ({name, main, weatherIcon, visible=true}: WeatherInfoProps) {
    return(
        <WeatherWrapper>
            <WeatherContainer visible={visible}>
                <WeatherDegree>
                    <Degree>{main ? main.temp : ""}</Degree>
                    <City>{name}</City>
                        {weatherIcon}
                </WeatherDegree>
                <WeatherFeelsLike>
                    <TemperatureIconContainer>
                        <IconTemperature/>
                        <Title>FEELS LIKE</Title>
                    </TemperatureIconContainer>
                    <DegreeContainer>
                        <FeelsLikeDegree>{main ? main.feels_like : ""}</FeelsLikeDegree>
                    </DegreeContainer>
                </WeatherFeelsLike>
            </WeatherContainer>
        </WeatherWrapper>
    )
}

export default WeatherInfo;
