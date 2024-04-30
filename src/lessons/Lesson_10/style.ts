import styled from "@emotion/styled";

interface TextBlockProps {
    visible?: boolean;
}

export const ButtonWrapper = styled.div`
    display: flex;
    margin: 0 auto;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
    margin: 20px 0 0 0;
`

export const ButtonsBlock = styled.div`
    gap: 20px;
    display: flex;
`

export const TextBlock = styled.div<TextBlockProps>`
    width: 100%;
    height: 350px;
    overflow: auto;
    border-radius: 2px;
    display: ${({visible}) => visible ? "none" : "flex"};
    flex-direction: column;
    row-gap: 10px
`

export const Title = styled.p`
    border: 1px solid blue;
    padding: 10px;
`
