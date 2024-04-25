import {BoxComponent, Lesson08Component, ButtonComponent, InfoBoxComponent} from "./style";

function Lesson_08() {
    const styleObject = {
        fontSize: '24px',
        color: 'blue'
    };
    return(
        // <p style={{fontSize: '24px', color: 'blue'}}>Hello</p>
        <Lesson08Component>
            <BoxComponent>Hello</BoxComponent>
            <ButtonComponent mainButton>Custom button</ButtonComponent>
            <ButtonComponent>Custom button</ButtonComponent>
            <InfoBoxComponent>Info</InfoBoxComponent>
        </Lesson08Component>
    )
}

export default Lesson_08
