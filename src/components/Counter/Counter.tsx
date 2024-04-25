import "components/Counter/style.css";
import Button from "components/Button/Button";
import "components/Counter/types";
import {CounterProps} from "components/Counter/types";

function Counter({onMinusClick, countValue, onPlusClick} : CounterProps) {
    return (
        <div className="counter-wrapper">
            <div className="button-control">
                <Button onButtonClick={onMinusClick} name="-" />
            </div>
            <p>{countValue}</p>
            <div className="button-control">
                <Button onButtonClick={onPlusClick} name="+" />
            </div>
        </div>
    );
}

export default Counter;
