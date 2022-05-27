import React from "react";
import { Task } from "../../types/task";
import { Button } from "../Button";
import style from './style.module.scss';
import {v4 as uuid4} from 'uuid';

export class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}>{
    state = {
        taskName: "",
        time: "00:00"
    }
    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks(oldTaks => [...oldTaks, 
            {...this.state, selected: false, completed: false, id: uuid4()}])
        this.setState({
            taskName: "",
            time: "00:00"
        })
    }
    render() {

        return(
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add new study task
                    </label>
                    <input type="text" name="task" 
                    value={this.state.taskName}
                    onChange={event =>this.setState({...this.state, taskName: event.target.value})}
                    id="task" placeholder="What do you want study?" required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input type="time" value={this.state.time}
                    onChange={event => this.setState({...this.state, time: event.target.value})} 
                    step="1" name="time" id="time" min="00:00:00" 
                    max="01:30:00" required/>
                </div>
                <Button text="Add" type="submit"/>
            </form>
        )
    }
}