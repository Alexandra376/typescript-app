import styled from "@emotion/styled";

export interface LoaderProps {
    loading?: boolean;
}

export const LoaderContainer = styled('span')<LoaderProps>`
    width: 48px;
    height: 48px;
    border: 3px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    display: ${({loading}) => (loading ? "block" : "none")};

    ::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 3px solid;
        border-color: #FF3D00 transparent;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`