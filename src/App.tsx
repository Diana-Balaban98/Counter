import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
 const [inc, setInc] = useState<number>(0);

  const incForButton = () => {
    if (inc < 5) {
        let count = inc;
        setInc(++count)
    }
  }

  const resetForButton = () => {
    setInc(0)
  }


  return (
      <Counter
          inc={inc}
          incForButton={incForButton}
          resetForButton={resetForButton}
      />
  );
}

export default App;
