import "./style.css";
import { ButtonProps } from './types'
import {ButtonStyle} from './style';

function Button({ name, type = "button", onButtonClick }: ButtonProps) {
    return (
        <ButtonStyle type={type} onClick={onButtonClick}>
            {name}
        </ButtonStyle>
    );
}

export default Button;
