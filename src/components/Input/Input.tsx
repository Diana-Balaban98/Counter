import React, {ChangeEvent} from 'react';
import s from "./Input.module.css"

type InputPropsType = {
    callBack: (value: number) => void
    value: number
    condition: boolean
}

export const Input = ({value, callBack, condition}: InputPropsType) => {
    const styleForInput = condition ? s.inputError : ""

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        callBack(Number(event.currentTarget.value))
    }

    return <input
                className={styleForInput}
                value={value}
                type="number"
                onChange={onChangeHandler}
    />;
};

