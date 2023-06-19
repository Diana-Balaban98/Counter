import React, {ChangeEvent} from 'react';
import s from "../Wrapper.module.css"
import {Button} from "../Button/Button";

type SettingsPropsType = {
    maxValue: number
    setMaxValue: (value: number) => void
    startValue: number
    setStartValue: (value: number) => void
    conditionForMax: boolean
    conditionForStart: boolean
}

export const Settings = ({maxValue,
                             setMaxValue,
                             setStartValue,
                             startValue,
                             ...restProps}: SettingsPropsType) => {
    // const onChangeHandler = (setState: React.Dispatch<React.SetStateAction<number>>) => {
    //     return (event: ChangeEvent<HTMLInputElement>) => {
    //         setState(Number(event.currentTarget.value))
    //     }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
    }

    return (
        <div className={s.wrapperCounter}>
            <div className={s.scoreboard}>
                <div>
                    <div>
                        <span className={s.value}>max value: </span>
                        <input
                            className={restProps.conditionForMax ? s.inputError : ""}
                            type="number"
                            value={maxValue}
                            onChange={onChangeMaxValue}
                        />
                    </div>
                         <span className={s.value}>start value: </span>
                    <input
                        className={restProps.conditionForStart ? s.inputError : ""}
                        type="number"
                        value={startValue}
                        onChange={onChangeStartValue}
                    />
                </div>
            </div>

            <div className={s.wrapperButtons}>
                <Button
                    // disable={maxValue === startValue || startValue < 0}
                    name="set"
                    callBack={() => {}}/>
            </div>
        </div>
    );
};


