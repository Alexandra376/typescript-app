import styled from "@emotion/styled";

interface TextBlockProps {
    visibility: boolean;
}

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 400px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ButtonsBlock = styled.div`
    gap: 20px;
    display: flex;
`

export const TextBlock = styled.div<TextBlockProps>`
    border: 1px solid blue;
    width: 100%;
    height: 50px;
    padding: 10px;
    overflow: auto;
    border-radius: 2px;
    display: ${({visibility}) => visibility ? "block" : "none"};
`

export const Title = styled.p`
`
