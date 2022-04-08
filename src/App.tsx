import React, { useState } from 'react';
import './style/styles.css';

import { ToDoTask } from './components/ToDoTask/ToDoTask';
import { ITask } from './interface'

function App() {
  const [task, setTask] = useState<string>('');

  const [todoList, setTodoList] = useState<ITask[]>([]);

  function addTask(): void {
    const idRandom = (num: number) => Math.floor(Math.random() * num);
    const newTask = { id: idRandom(999), nameTask: task }
    setTodoList([...todoList, newTask]);
    setTask('')
  }

  function deleteTask(DeleteTaskById: number) {
    setTodoList(todoList.filter(taskName => taskName.id !== DeleteTaskById))
  }

  function editTask  (EditTaskByName: string, EditTaskById: number){
    const newTask = EditTaskByName;
    todoList.filter(taskName => {
      if(taskName.id === EditTaskById) {
        setTask(newTask);
      }
    })
  }

  return (
    <div className="App">
      <header>
        <h2>Lists</h2>
        <input type="text" autoComplete="off" placeholder="Write Tarks" className="input" value={task} onChange={(event) => setTask(event.target.value)} />
        <button type="submit" onClick={addTask} className="btn-header">Adicionar task</button>
      </header>
      <div className="line"></div>
      
      {todoList.map((task, key) => (
          <ToDoTask key={key} task={task} deleteTask={deleteTask} editTask={editTask} />
          
        ))}
    </div>
  );
}

export default App;
