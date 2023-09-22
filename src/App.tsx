import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks, TasksProps } from './components/Tasks';

import styles from './App.module.css';
import './global.css';

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function onAddNewTask(taskContent: string) {
    const newTask = {
      id: uuidv4(),
      content: taskContent,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
  }

  function onCheckTaskAsDone(taskId: string) {
    const newTasks = tasks.map(task => task.id === taskId ? ({ ...task, isDone: !task.isDone }) : task);
    setTasks(newTasks);
  }

  function onDeleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId)
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask onAddNewTask={onAddNewTask} />
        <Tasks tasks={tasks} onCheckTaskAsDone={onCheckTaskAsDone} onDeleteTask={onDeleteTask} />
      </div>
    </div>
  )
}

export default App
