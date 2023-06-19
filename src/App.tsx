import React, {useState} from 'react';
import s from "./components/Wrapper.module.css"
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";


function App() {
    let [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)

    const conditionForMax = maxValue < 0 ||  maxValue === startValue
    const conditionForStart = startValue < 0 ||  maxValue === startValue
    const generalConditionForValues = conditionForMax || conditionForStart

    return (
      <div className={s.app}>
          <Settings
              maxValue={maxValue}
              setMaxValue={setMaxValue}
              startValue={startValue}
              setStartValue={setStartValue}
              conditionForMax={conditionForMax}
              conditionForStart={conditionForStart}
          />
          <Counter maxValue={maxValue}
                   startValue={startValue}
                   generalConditionForValues={generalConditionForValues}
          />
      </div>

  );
}

export default App;
