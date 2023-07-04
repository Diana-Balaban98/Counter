import React, {ChangeEvent} from 'react';

type InputPropType = {
    callBack: (value: string) => void
    value: number
    condition: string
}

export const Input = ({value, callBack, condition}: InputPropType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e.currentTarget.value)
    }

    return <input
                className={condition}
                value={value}
                type="number"
                onChange={onChangeHandler}
    />;
};

