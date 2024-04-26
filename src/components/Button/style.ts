import styled from "@emotion/styled";

interface ButtonProps {
    disabled?: boolean;
}

export const ButtonStyle = styled.button<ButtonProps>`
    width: 100%;
    height: 70px;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 20px;
    background: ${({disabled}) => disabled ? '#1f2f56' : "#1f27f5"};
    color: white;
    font-size: 16px;
    cursor: pointer;
`
