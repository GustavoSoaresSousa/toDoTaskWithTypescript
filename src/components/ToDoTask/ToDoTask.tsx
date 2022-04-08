import React from 'react';
import './ToDoTask.css';

import {ITask} from '../../interface';

interface TaskProps {
  task: ITask;
  deleteTask(DeleteTaskById: number | undefined): void;
  editTask(EditTaskByName: string, EditTaskById: number): void;
}

export function ToDoTask({task, deleteTask, editTask}: TaskProps) {
  return (
    <div className="card">
      <div>{task?.nameTask}</div>
        <div className="line2" ><button onClick={() => editTask(task.nameTask, task.id)}>Editar</button>
        <span className="btn-card" onClick={() => deleteTask(task?.id)}>X</span>
      </div>
    </div>
  );
}