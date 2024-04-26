import "./style.css";
import {InputProps } from "./types";
import {InputContainerStyle, InputLabelStyle, InputStyle} from "./style";

function Input({ name, type = "text", placeholder, label, onInputChange } :InputProps) {
    return (
        <InputContainerStyle>
            <InputLabelStyle>{label}</InputLabelStyle>
            <InputStyle
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onInputChange}
            />
        </InputContainerStyle>
    );
}

export default Input;
