import styled from "@emotion/styled";

interface ButtonComponentPropsStyles {
    disabled?: boolean;
}

export const Homework08Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 40px;
`

export const ButtonComponent = styled.button<ButtonComponentPropsStyles>`
    width: 180px;
    height: 60px;
    border: none;
    cursor: pointer;
    
    background: ${({disabled}) => disabled ? '#6c87b5' : '#3775dd'};
`
