import React, {useEffect} from 'react';
import s from '../Wrapper.module.css'
import {Button} from "../Button/Button";
import {InitialValuesType} from "../../App";

type CounterPropType = {
    initialValues: InitialValuesType
    generalConditionForValues: boolean
    alertMessage: boolean
    setAlertMessage: (value: boolean) => void
    disabled: boolean
    setDisabled: (value: boolean) => void
}

export const Counter = ({initialValues, generalConditionForValues, setAlertMessage, alertMessage}: CounterPropType) => {

    const descriptionForDisplay = {
        inCorrectValue: "Incorrect value!",
        correctValue: "enter values and press 'set'"
    }

    const {maxValue, startValue, counter, setCounter} = initialValues
    const equalValues = counter === maxValue

    const disableForInc = equalValues || !!descriptionForDisplay.inCorrectValue
    const styleForError = `${s.alert} ${s.red}`;
    const styleForCounter = `${s.alert} ${equalValues ? s.red : ""}`

    const incForButton = () => {
        if (counter !== null && counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetForButton = () => {
        setCounter(startValue)
    }


    return (
        <div className={s.wrapperCounter}>
            <h2 style={{margin: "0px"}}>Counter</h2>
            <div className={s.scoreboard}>
                <div>
                    {
                        generalConditionForValues ? (
                                <p className={styleForError}>{descriptionForDisplay.inCorrectValue}</p>)
                            : alertMessage ? (<p className={s.alert}>{descriptionForDisplay.correctValue}</p>) :
                                <p className={styleForCounter}>{counter}</p>
                    }
                </div>
            </div>

            <div className={s.wrapperButtons}>
                <Button
                    disable={disableForInc}
                    name="inc"
                    callBack={incForButton}/>
                <Button
                    disable={!counter}
                    name="reset"
                    callBack={resetForButton}/>
            </div>
        </div>
    );
}


