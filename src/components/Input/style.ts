import styled from "@emotion/styled";

interface InputProps {
    isRowReverse: boolean;
}

export const InputContainerStyle = styled.div<InputProps>`
    display: flex;
    flex-direction: ${({isRowReverse}) => isRowReverse ? "row-reverse" : "column"};
    justify-content: ${({isRowReverse}) => isRowReverse ? "start" : "flex-start"};
    gap: 4px;
    width: 100%;
    height: fit-content;
`

export const InputLabelStyle = styled.label`
    font-size: 16px;
    color: #6f6f6f;
`

export const InputStyle = styled.input`
    width: auto;
    height: auto;
    padding: 12px;
    outline: none;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 16px;

    ::placeholder {
        color: #6f6f6f;
    }
`

export const ErrorMessage = styled.div`
    font-size: 16px;
    color: red;
    height: 18px;
`
