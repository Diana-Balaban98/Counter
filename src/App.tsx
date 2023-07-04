import React, {useState} from 'react';
import s from "./components/Wrapper.module.css"
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";


export type ConditionsForValuesType = {
    conditionForMax: boolean
    conditionForStart: boolean
    generalConditionForValues: boolean
}
export type InitialValuesType = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    counter: number | null
    setCounter: (value: number) => void
}

function App() {
    const [counter, setCounter] = useState<number | null>(null);
    let [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [alertMessage, setAlertMessage] = useState(false)

    const valuesIsEqual = maxValue === startValue
    const conditionForMax = maxValue < 0 || valuesIsEqual || maxValue < startValue
    const conditionForStart = startValue < 0 || valuesIsEqual
    const generalConditionForValues = conditionForMax || conditionForStart

    const conditionsForValues = {
        conditionForMax: conditionForMax,
        conditionForStart: conditionForStart,
        generalConditionForValues: generalConditionForValues
    }

    const initialValues = {
        maxValue: maxValue,
        setMaxValue: setMaxValue,
        startValue: startValue,
        setStartValue: setStartValue,
        counter: counter,
        setCounter: setCounter
    }

    return (
        <div className={s.app}>
            <Settings
                initialValues={initialValues}
                conditionsForValues={conditionsForValues}
                setAlertMessage={setAlertMessage}
            />
            <Counter
                initialValues={initialValues}
                generalConditionForValues={generalConditionForValues}
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
            />
        </div>
    );
}

export default App;
