import "./style";
import {Homework08Component} from "homeworks/Homework_08/style";
import Button from "components/Button/Button";

function Homework_08() {
    return(
        <Homework08Component>
            <Button name="Button"></Button>
            <Button name="Disabled button" disabled></Button>
        </Homework08Component>
    )
}

export default Homework_08;
