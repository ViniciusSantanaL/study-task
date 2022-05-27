import { Task } from '../../../types/task';
import style from '../style.module.scss';

interface Props {
    task: Task,
    selectTask: (selectedTask: Task) => void
}
export function Item(props: Props) {

    return (
        <li className={`${style.item} ${props.task.selected ? style.itemSelecionado : ''} ${props.task.completed ? style.itemCompletado : ''}`} 
            onClick={() => !props.task.completed && props.selectTask(props.task)}>
            <h3>{props.task.taskName}</h3>
            <span>{props.task.time}</span>
            {props.task.completed && <span className={style.concluido}></span>}
        </li>
    );
}