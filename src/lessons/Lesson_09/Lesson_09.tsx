import React, {ChangeEvent, useEffect, useState} from "react";
import {InputExample, Lesson09Component, Result} from "./style";

function Lesson_09() {

    const [inputValue, setInputValue] = useState<string>("");
    const [inputValue2, setInputValue2] = useState<string>("");
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue2(event.target.value);
    }

    //Вызов функции callback функции при создании компонента. Пустой массив зависимостей
    useEffect(() => {
        console.log("Updating");
    }, [])

    useEffect(() => {
        console.log("Updating");
    }, [inputValue])

    useEffect(() => {
        return () => {
            console.log("Unmounting");
        }
        console.log("Updating");
    }, [inputValue])

    return(
        <>
            <Lesson09Component>
                <InputExample name='example' placeholder='example test' onChange={onChangeInput}/>
                <InputExample name='example2' placeholder='example test' onChange={onChangeInput2}/>
                <Result>{inputValue}</Result>
                <Result>{inputValue2}</Result>
            </Lesson09Component>
        </>
    )
}

export default Lesson_09
