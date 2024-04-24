import "components/Input/style.css";
import {InputProps } from "components/Input/types";

function Input({ name, type = "text", placeholder, label, onInputChange } :InputProps) {
    return (
        <div className="input-component-container">
            <label className="input-component-label">{label}</label>
            <input
                className="input-component"
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onInputChange}
            />
        </div>
    );
}

export default Input;
