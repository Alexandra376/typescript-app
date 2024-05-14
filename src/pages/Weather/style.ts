import styled from "@emotion/styled";
import {Background} from "assets/images";

export const WeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-image: url(${Background});
    color: #FFFFFF;
`

export const Header = styled.div`
    background: #122d4d80;
    padding: 10px;
    border-bottom: 1px solid #D2D2D2;
`

export const HeaderTitle = styled.h2`
    font-weight: 700;
    font-size: 24px;
    justify-content: center;
    display: flex;
`

export const SearchContainer = styled.div`
    display: flex;
    width: 710px;
    justify-content: center;
    margin: 0 auto;
    gap: 14px;
    padding-top: 120px;
`

export const WeatherIcon = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    left: 270px;
`
