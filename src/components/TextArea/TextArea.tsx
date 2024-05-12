import {TextAreaProps} from "./types";
import {LabelStyle, TextAreaContainerStyle, TextareaStyle} from "./style";

function TextArea({placeholder, name, label, getValue} :TextAreaProps) {
    return (
        <TextAreaContainerStyle>
            <LabelStyle>{label}</LabelStyle>
            <TextareaStyle placeholder={placeholder} name={name} onChange={getValue}/>
        </TextAreaContainerStyle>
    )
}

export default TextArea;
