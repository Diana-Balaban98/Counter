import React from 'react';
import s from './Counter.module.css'
import {Button} from "../Button/Button";


type CounterPropsType = {
    inc: number
    incForButton: () => void
    resetForButton: () => void
}

export const Counter = ({inc, incForButton, resetForButton}: CounterPropsType) => {
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

