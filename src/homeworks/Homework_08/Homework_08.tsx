import "./style";
import {ButtonComponent, Homework08Component} from "homeworks/Homework_08/style";

function Homework_08() {
    return(
        <Homework08Component>
            <ButtonComponent>Click</ButtonComponent>
            <ButtonComponent disabled>Click</ButtonComponent>
        </Homework08Component>
    )
}

export default Homework_08;
