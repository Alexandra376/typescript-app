import Button from "../../components/Button/Button";
import {ReactElement, useEffect, useState} from "react";
import {Container, ButtonWrapper, ButtonsBlock, TextBlock, Title} from "./style";
import Loader from "../../components/Loader/Loader";
import "./types";
import { v4 } from 'uuid';

function Lesson_10(): ReactElement {
    const [facts, setFacts] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getCatsFacts = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://catfact.ninja/fact');
            const result = await response.json();
            if (!response.ok) {
                throw Object.assign(new Error('API Error'), {
                    response: result
                });
            } else {
                setFacts((prevValue) => [...prevValue, result.fact]);
                setLoading(false);
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    const handleDeleteFacts = () => setFacts([])

    const isVisibleData = !facts.length /// почему мы на false делаем видимым элемент?


    useEffect(() => {
        getCatsFacts();
    }, []);

    const catFactsElements = facts.map((fact) => <Title key={v4()}>{fact}</Title>);
    /////// почему это не компонент если он возвращает JSX ????

    return (
        <ButtonWrapper>
            <Container>
                <ButtonsBlock>
                    <Button name='Get more info' type='submit' handlerButton={getCatsFacts} />
                    <Button name='Delete all data' type='submit' handlerButton={handleDeleteFacts}  disabled={isVisibleData}/>
                </ButtonsBlock>
                {loading ? <Loader loading={loading}/> :
                    <TextBlock visible={isVisibleData}>{catFactsElements}</TextBlock>}
            </Container>
        </ButtonWrapper>
    )
}

export default Lesson_10;
