import "./style.css";
import Button from "../Button/Button";

function Counter({onMinusClick, countValue, onPlusClick} :any) {
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