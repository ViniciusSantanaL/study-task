import { useEffect, useState } from "react";
import { timeForSeconds } from "../../common/utils/time";
import { Task } from "../../types/task";
import { Button } from "../Button";
import { Clock } from "./Clock";
import style from './style.module.scss'

interface Props {
    selectedTask: Task | undefined
    finishTask: () => void;
}
export function Timer(props: Props) {
    const [time, setTime] = useState<number>();
    useEffect(() => {
        if(props.selectedTask?.time) {
            setTime(timeForSeconds(props.selectedTask.time));
        }
    },[props]);

    function regressive(count: number = 0) {
        setTimeout(() => {
            if(count > 0){
                setTime(count - 1);
                return regressive(count - 1);
            }
            props.finishTask();
        }, 1000)
    }
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose one card and start the Timer</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button text="Start" onClick={() => regressive(time)}/>
        </div>

    );
}