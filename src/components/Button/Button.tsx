import React from 'react';
import s from './Button.module.css'

type ButtonPropType = {
    name: string
    callBack: () => void
    disable: boolean
}

export const Button = ({name, callBack, disable}: ButtonPropType) => {
    const disableButton = `${s.button} ${!disable ? "" : s.buttonDisabled}`

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button
            className={disableButton}
            disabled={disable}
            onClick={onClickHandler}
        >
            {name}
        </button>
    );
};

