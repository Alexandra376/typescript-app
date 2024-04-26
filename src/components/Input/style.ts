import styled from "@emotion/styled";

export const InputContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    height: fit-content;
`

export const InputLabelStyle = styled.label`
    font-size: 16px;
    color: #6f6f6f;
`

export const InputStyle = styled.input`
    width: 100%;
    height: 50px;
    padding: 12px;
    outline: none;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 16px;

    ::placeholder {
        color: #6f6f6f;
    }
`
