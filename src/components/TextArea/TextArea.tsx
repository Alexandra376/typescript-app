import "components/TextArea/style.css";
import {ITextAreaProps} from "components/TextArea/types";

function TextArea({placeholder, name, label} :ITextAreaProps) {
    return (
        <div className="text-area-container">
            <label>{label}</label>
            <textarea placeholder={placeholder} name={name}></textarea>
        </div>
    )
}

export default TextArea;
