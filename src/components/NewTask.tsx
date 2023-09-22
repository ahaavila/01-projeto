import { useState, ChangeEvent } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

interface NewTaskProps {
  onAddNewTask: (content: string) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleAddNewTask() {
    event?.preventDefault();
    onAddNewTask(newTask);
    setNewTask('');
  }

  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleAddNewTask}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        onChange={handleNewTaskText}
        value={newTask}
      />
      <button type='submit'>Criar <PlusCircle size={16} /></button>
    </form>
  )
}
