import {InputProps } from "./types";
import {InputContainerStyle, InputLabelStyle, InputStyle} from "./style";

function Input({ name, type = "text", label, placeholder='Output', getValue, value, isRowReverse=false, isChecked } :InputProps) {
    return (
        <InputContainerStyle isRowReverse={isRowReverse}>
            <InputLabelStyle>{label}</InputLabelStyle>
            <InputStyle
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={getValue}
                value={value}
                checked={isChecked}
            />
        </InputContainerStyle>
    );
}

export default Input;
