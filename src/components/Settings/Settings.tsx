import React from 'react';
import s from "../Wrapper.module.css"
import {Button} from "../Button/Button";
import {ConditionsForValuesType, InitialValuesType} from "../../App";
import {Input} from "../Input/Input";

type SettingsPropType = {
    initialValues: InitialValuesType
    conditionsForValues: ConditionsForValuesType
    setAlertMessage: (value: boolean) => void
    disabled: boolean
    setDisabled: (value: boolean) => void
}

export const Settings = ({
                             initialValues,
                             conditionsForValues,
                             setAlertMessage, setDisabled, disabled
                         }: SettingsPropType) => {
    const {conditionForStart, generalConditionForValues, conditionForMax} = conditionsForValues;
    const {maxValue, startValue, setMaxValue, setStartValue, setCounter} = initialValues

    const onChangeMaxValue = (maxValue: string) => {
        setMaxValue(Number(maxValue))
    }
    const onChangeStartValue = (startValue: string) => {
        setStartValue(Number(startValue))
    }

    const setValueForCounter = () => {
        setAlertMessage(false)
        setCounter(startValue)
        setDisabled(true)
    }



    return (
        <div className={s.wrapperCounter}>
            <h2 style={{margin: "0px"}}>Settings</h2>
            <div className={s.scoreboard}>
                <div>
                    <div>
                        <span className={s.value}>max value: </span>
                        <Input
                            callBack={onChangeMaxValue}
                            value={maxValue}
                            condition={conditionForMax ? s.inputError : ""}
                        />
                    </div>
                    <span className={s.value}>start value: </span>
                    <Input
                        callBack={onChangeStartValue}
                        value={startValue}
                        condition={conditionForStart ? s.inputError : ""}
                    />
                </div>
            </div>

            <div className={s.wrapperButtons}>
                <Button
                    disable={disabled || generalConditionForValues}
                    name="set"
                    callBack={setValueForCounter}/>
            </div>
        </div>
    );
};





