import "./style.css"
import Button from "../Button/Button";
import { useState } from "react";

function Counter() {
    const [count, setValue] = useState<number>(0);

    const onMinus = () => {
        setValue((prevValue =>  prevValue - 1));
    }

    const onPlus = () => {
        setValue((prevValue =>  prevValue + 1));
    }

    return(
        <div className="counter-wrapper">
            <div className="button-control">
                <Button onButtonClick= {onMinus} name="-"/>
            </div>
            <p>{count}</p>
            <div className="button-control">
                <Button onButtonClick={onPlus} name="+"/>
            </div>
        </div>
    )
}

export default Counter;
