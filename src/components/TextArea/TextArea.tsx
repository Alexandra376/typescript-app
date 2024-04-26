import "./style.css";
import {TextAreaProps} from "./types";
import {LabelStyle, TextAreaContainerStyle, TextareaStyle} from "./style";

function TextArea({placeholder, name, label} :TextAreaProps) {
    return (
        <TextAreaContainerStyle>
            <LabelStyle>{label}</LabelStyle>
            <TextareaStyle placeholder={placeholder} name={name}></TextareaStyle>
        </TextAreaContainerStyle>
    )
}

export default TextArea;
