import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    disable?: boolean
}

export const Button = ({name, callBack, disable}: ButtonPropsType) => {
    const onClickHandler = () => {
        callBack()
    }

    return (
        <button
            className={`${s.button} ${!disable ? "" : s.buttonDisabled}`}
            disabled={disable}
            onClick={onClickHandler}
        >
            {name}
        </button>
    );
};

