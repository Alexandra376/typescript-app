import { ButtonProps } from './types'
import {ButtonStyle} from './style';

function Button({ name, type = "button", onButtonClick, disabled=false}: ButtonProps) {
    return (
        <ButtonStyle disabled={disabled} type={type} onClick={onButtonClick}>
            {name}
        </ButtonStyle>
    );
}

export default Button;
