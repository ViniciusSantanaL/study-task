import { useState } from 'react';
import { Task } from '../../types/task';
import { Item } from './Item';
import style from './style.module.scss';

interface Props {
    tasks: Array<Task>;
    selectTask: (selectedTask: Task) => void;
}
export function List(props: Props) {
    
    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
            }}>Study Tasks of Day</h2>
            <ul>
                {props.tasks.map(item => (
                    <Item
                    selectTask={props.selectTask}
                    task={item}
                    key={item.id}    
                    /> 
                ))}
            </ul>
        </aside>
    )
}