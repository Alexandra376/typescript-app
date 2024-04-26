import "./style.css";
import Button from "components/Button/Button";
import "./types";
import {CounterProps} from "components/Counter/types";
import {CounterWrapperStyle, ButtonControlStyle, ParagraphStyle} from './style';

function Counter({onMinusClick, countValue, onPlusClick} : CounterProps) {
    return (
        <CounterWrapperStyle>
            <ButtonControlStyle>
                <Button onButtonClick={onMinusClick} name="-" />
            </ButtonControlStyle>
            <ParagraphStyle>{countValue}</ParagraphStyle>
            <ButtonControlStyle>
                <Button onButtonClick={onPlusClick} name="+" />
            </ButtonControlStyle>
        </CounterWrapperStyle>
    );
}

export default Counter;
