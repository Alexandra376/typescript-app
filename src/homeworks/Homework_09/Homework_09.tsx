import Input from "components/Input/Input";
import Button from "components/Button/Button";
import "homeworks/Homework_09/style"
import {
    Homework09Component,
    Homework09InputContainer,
    Homework09Wrapper,
    InformationOutputStyle
} from "homeworks/Homework_09/style";
import {ChangeEvent, useState} from "react";

function Homework_09() {
    const[inputValue, setInputValue] = useState<string>("");
    const[inputValueSecond, setInputValueSecond] = useState<string>("");

    const [info, setInfo] = useState<string>("");
    const [info2, setInfoSecond] = useState<string>("");

    const handlerInputValue = (event: ChangeEvent<HTMLInputElement>) :void => {
        setInputValue(event.target.value)
    }

    const handlerInputValueSecond = (event: ChangeEvent<HTMLInputElement>) :void => {
        setInputValueSecond(event.target.value)
    }

    return(
        <Homework09Component>
            <Homework09Wrapper>
                <Homework09InputContainer>
                    <Input name='email'
                           type = 'email'
                           placeholder='Email'
                           label='Click me'
                           getValue={handlerInputValue} />
                    <InformationOutputStyle>{info}</InformationOutputStyle>
                    <Input name='password'
                           type = 'password'
                           placeholder='Password'
                           label='Click me'
                           getValue={handlerInputValueSecond}/>
                    <InformationOutputStyle>{info2}</InformationOutputStyle>
                </Homework09InputContainer>
                <Button type='button' name='Print' handlerButton={() :void => {
                    setInfo(inputValue)
                    setInfoSecond(inputValueSecond)
                }}/>
            </Homework09Wrapper>
        </Homework09Component>
    )
}

export default Homework_09
