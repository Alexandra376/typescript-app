import styled from "@emotion/styled";

interface ButtonProps {
    disabled?: boolean;
}

export const ButtonStyle = styled.button<ButtonProps>`
    width: 100%;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 20px;
    background: #1f27f5;
    opacity: ${({disabled}) => disabled ? 0.7 : 1};
    color: white;
    font-size: 16px;
    cursor: pointer;
`
