import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
 const [inc, setInc] = useState(0);

  const incForButton = () => {
    if (inc < 5) {
        setInc(inc + 1)
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
