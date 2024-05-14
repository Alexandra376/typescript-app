import {WeatherContainer, WeatherDegree, WeatherWrapper} from "../WeatherInfo/style";
import {ErrorDisplay} from "./style";

function WeatherError() {
    return(
        <WeatherWrapper>
            <WeatherContainer visible={false}>
                <WeatherDegree>
                    <ErrorDisplay/>
                </WeatherDegree>
            </WeatherContainer>
        </WeatherWrapper>
    )
}

export default WeatherError;
