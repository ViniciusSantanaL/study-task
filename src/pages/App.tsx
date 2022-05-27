import React, { useState } from 'react';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { Timer } from '../components/Timer';
import { Task } from '../types/task';
import style from './style.module.scss';
function App() {
  const [tasks, setTasks] = useState<Array<Task> | []>([]);
  const [selected, setSelected] = useState<Task>();

  function selectTask(selectedTask: Task) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id == selectedTask.id ? true : false
    })));
  }

  function finishTask(): void {
    if(selected) {
      setSelected(undefined)
      setTasks(oldTasks => 
        oldTasks.map(oldTask => {
          if(oldTask.id == selected?.id){
            return {
              ...oldTask,
              selected: false,
              completed: true
            };
          }
          return oldTask;
        }))
    }
    
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selectedTask={selected} finishTask={finishTask}/>
    </div>
  );
}

export default App;
