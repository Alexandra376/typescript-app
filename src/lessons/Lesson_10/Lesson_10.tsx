import Button from "../../components/Button/Button";
import {ReactElement, useEffect, useState} from "react";
import {Lesson10} from './types';
import {Container, ButtonWrapper, ButtonsBlock, TextBlock, Title} from "./style";
import Loader from "../../components/Loader/Loader";

function Lesson_10(): ReactElement {
    const [facts, setFacts] = useState<Lesson10>();
    const [visibility, setVisibility] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const getCatsFacts = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://catfact.ninja/fact');
            const result = await response.json();
            if (!response.ok) {
                throw Object.assign(new Error('API Error'), {
                    response: result
                });
            } else {
                setFacts(result);
                setLoading(false);
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCatsFacts();
    }, []);

    return (
        <ButtonWrapper>
            <Container>
                <ButtonsBlock>
                    <Button name='Get more info' type='submit' handlerButton={() => setVisibility(true)}/>
                    <Button name='Delete all data' type='submit' handlerButton={() => setVisibility(false)}></Button>
                </ButtonsBlock>
                <TextBlock visibility={visibility}>
                    <Title>{facts?.fact}</Title>
                </TextBlock>
                <Loader loading={loading}></Loader>
            </Container>
        </ButtonWrapper>
    )
}

export default Lesson_10;
