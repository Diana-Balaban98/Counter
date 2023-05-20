import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from "../Button/Button";



export const Counter = () => {
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
        <div className={s.wrapperCounter}>
            <div className={s.scoreboard}>
               <div className={`${s.score} ${inc === 5? s.limit : ""}`}>
                   {inc}
               </div>
            </div>

            <div className={s.wrapperButtons}>
                <Button disable={inc === 5} name="inc" callBack={incForButton}/>
                <Button disable={!inc} name="reset" callBack={resetForButton}/>
            </div>
        </div>
    );
};

