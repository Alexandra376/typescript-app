import styled from "@emotion/styled";
import {css} from "@emotion/react";

interface ButtonComponentPropsStyles {
    mainButton?: boolean;
}

const commonBoxStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
`

export const BoxComponent = styled.div`
    ${commonBoxStyles}
    background: pink;
`

export const InfoBoxComponent = styled.div`
    ${commonBoxStyles}
    background: grey;
`

export const Lesson08Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    gap: 30px;
`

export const ButtonComponent = styled.button<ButtonComponentPropsStyles>`
    width: 200px;
    height: 70px;
    border: none;
    
    background: ${({mainButton}) => mainButton ? 'pink' : 'green'};
    border-radius: 6px;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
`
