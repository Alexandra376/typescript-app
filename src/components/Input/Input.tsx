import {InputProps } from "./types";
import {InputContainerStyle, InputLabelStyle, InputStyle} from "./style";

function Input({ name, type = "text", label, placeholder='Output', getValue, value } :InputProps) {
    return (
        <InputContainerStyle>
            <InputLabelStyle>{label}</InputLabelStyle>
            <InputStyle
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={getValue}
                value={value}
            />
        </InputContainerStyle>
    );
}

export default Input;
