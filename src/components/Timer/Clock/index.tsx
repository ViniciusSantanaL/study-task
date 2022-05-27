import React from "react";
import style from './style.module.scss';

interface Props {
    time: number | undefined;
}
export function Clock({time = 0}: Props) {

    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    const [firstNumMin,secondNumMin] = String(minutes).padStart(2,"0");
    const [firstNumSec,secondNumSec] = String(seconds).padStart(2,"0");
    return (
        <React.Fragment>
            <span className={style.relogioNumero}>{firstNumMin}</span>
            <span className={style.relogioNumero}>{secondNumMin}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{firstNumSec}</span>
            <span className={style.relogioNumero}>{secondNumSec}</span>
        </React.Fragment>
    );
}