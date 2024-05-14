import styled from "@emotion/styled";
import {Temperature} from "assets/images";

interface WeatherInfoProps {
    visible: boolean;
}

export const WeatherWrapper = styled.div`
    width: 100%;
    height: 129px;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    position: relative;
`

export const WeatherContainer = styled.div<WeatherInfoProps>`
    display: flex;
    flex-direction: column;
    gap: 32px;
    display: ${({visible}) => visible ? "none" : "flex"};
`

export const WeatherDegree = styled.div`
    background: #2f486fc2;
    width: 709px;
    border-radius: 18px;
    height: 129px;
    padding: 16px 0 16px 36px;
    gap: 6px;
    display: flex;
    flex-direction: column;
`

export const Degree = styled.h2`
    font-size: 57px;
    font-weight: 500;
`

export const City = styled.p`
    font-size: 18px;
`

export const IconWeather = styled.img``

export const WeatherFeelsLike = styled.div`
    width: 223px; 
    background: #2f486fc2;
    height: 141px;
    border-radius: 18px;
    display: flex;
    padding: 8px 0 55px 30px;
    flex-direction: column;
    gap: 8px;
`

export const TemperatureIconContainer = styled.div`
    display: flex;
`

export const IconTemperature = styled.img``

export const Title = styled.h4`
    color: #ffffff78;
    font-size: 12px;
    font-weight: 400;
`

export const DegreeContainer = styled.div``

export const FeelsLikeDegree = styled.p`
    font-size: 42px;
    font-weight: 500;
`

IconTemperature.defaultProps = {src: Temperature};
