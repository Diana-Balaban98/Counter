import React, {useEffect, useState} from 'react';
import s from '../Wrapper.module.css'
import {Button} from "../Button/Button";


type CounterPropsType = {
    maxValue: number
    startValue: number
    generalConditionForValues: boolean
}

export const Counter = ({maxValue, startValue, generalConditionForValues}: CounterPropsType) => {
    const [counter, setCounter] = useState(0);
    const [isAlert, setAlert] = useState(false);

    const styleForError = `${s.alert} ${s.red}`;
    const styleForCounter = `${s.alert} ${counter === maxValue ? s.red : ""}`

    const incForButton = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetForButton = () => {
        setCounter(startValue)
    }

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])


    useEffect(() => {
        if (startValue > 0 || maxValue > maxValue + 1) {
            setAlert(true)
        }
    },[startValue, maxValue])

    //
    // useEffect(() => {
    //     const newValue = localStorage.getItem('startValue')
    //     if (newValue) {
    //         setInc(JSON.parse(newValue))
    //     }
    // }, [])


    const submitValue = () => {
        setAlert(false)
        // setInc(startValue)
        const newValue = localStorage.getItem('startValue')
        if (newValue) {
            setCounter(JSON.parse(newValue))
        }
    }





return (<div className={s.wrapperCounter}>
        <div className={s.scoreboard}>
            <div>
                {
                    generalConditionForValues ? (<span className={styleForError}>Incorrect value!</span>)
                        : isAlert ? (<span className={s.alert}>enter values and press "set"</span>) :
                            <span className={styleForCounter}>{counter}</span>
                }
            </div>
        </div>

        <div className={s.wrapperButtons}>
            <Button
                disable={counter === maxValue}
                name="inc"
                callBack={incForButton}/>
            <Button
                name="reset"
                callBack={resetForButton}/>
        </div>
    </div>
);
}


