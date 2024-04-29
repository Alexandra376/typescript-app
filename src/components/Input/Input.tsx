import {InputProps } from "./types";
import {InputContainerStyle, InputLabelStyle, InputStyle} from "./style";

function Input({ name, type = "text", placeholder='Output', getValue } :InputProps) {
    return (
        <InputContainerStyle>
            <InputLabelStyle>{placeholder}</InputLabelStyle>
            <InputStyle
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={getValue}
            />
        </InputContainerStyle>
    );
}

export default Input;
