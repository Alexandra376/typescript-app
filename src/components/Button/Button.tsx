import "./style.css";
import type { ButtonProps } from "./types";

function Button({name, type, onButtonClick} :ButtonProps) {
    return(
        <button className={`button`} type={type} onClick={onButtonClick}>{name}</button>
    )
}

export default Button;
