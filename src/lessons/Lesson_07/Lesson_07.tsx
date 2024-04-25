import "lessons/Lesson_07/style.css";
import {useState} from "react";
import Counter from "components/Counter/Counter";

function Lesson_07() {
    const [count, setCount] = useState<number>(0);

    const onMinus = () :void => {
        setCount((prevValue) => prevValue - 1);
    };

    const onPlus = () :void => {
        setCount((prevValue) => prevValue + 1);
    };

    type CustomArrayType<T = string> = T[];
    const numbersArray: CustomArrayType<number> = [2, 3];
    const stringArray: CustomArrayType = ['2', '3'];

    type CustomArrayTupelType<T = string> = [string, T];
    const arrayMix1: CustomArrayTupelType = ['apple', '2'];
    const arrayMix2: CustomArrayTupelType<number> = ['apple', 2];

    interface Fruits {
        name: string,
        weight: number,
    }

    const fruits1: Fruits = {
        name: 'Apple',
        weight: 4
    }
    //пример с джинериком
    interface FruitsGeneric<Type> {
        name: string,
        weight: Type
    }

    const fruits2: FruitsGeneric<boolean> = {
        name: 'Apple',
        weight: true
    }

    //enum
    enum Colors {Red,Black, Green}
    // console.log(Colors);
    let color: Colors = Colors.Red;
    color = 0;
    console.log(color);

    enum WeathersCode {
        SQ = "SQ",
        PO = "PO",
        FC = "FC",
        BR = "BR",
        HZ = "HZ",
        FU = "FU",
        DS = "DS",
        SS = "SS",
    }

    const decode = (codeOfWeather: WeathersCode): string => {
        switch (codeOfWeather) {
            case WeathersCode.SQ:
                return "шквал";
            case WeathersCode.PO:
                return "пыльный вихрь";
            case WeathersCode.FC:
                return "торнадо";
            case WeathersCode.BR:
                return "дымка (видимость от 1 до 9 км)";
            case WeathersCode.HZ:
                return "мгла (видимость менее 10 км)";
            case WeathersCode.FU:
                return "дым (видимость менее 10 км)";
            case WeathersCode.DS:
                return "пыльная буря (видимость менее 10 км)";
            case WeathersCode.SS:
                return "песчаная буря (видимость менее 10 км) ";
        }
    };
    console.log(decode(WeathersCode.FC));

    return <div><Counter countValue={count} onMinusClick={onMinus} onPlusClick={onPlus}/></div>;
}

export default Lesson_07
