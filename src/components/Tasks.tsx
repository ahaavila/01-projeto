import { ClipboardText, Trash} from 'phosphor-react';

import styles from './Tasks.module.css';

export interface TasksProps {
  id: string;
  content: string;
  isDone: boolean;
}

export interface TasksType {
  tasks: TasksProps[];
  onCheckTaskAsDone: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Tasks({ tasks, onCheckTaskAsDone, onDeleteTask }: TasksType) {

  function handleCheckTaskAsDone(taskId: string) {
    onCheckTaskAsDone(taskId);
  }

  function handleDeleteTask(taskId: string) {
    onDeleteTask(taskId);
  }

  return (
    <div className={styles.tasks}>
      <header className={styles.header}>
        <span className={styles.createdTasks}>Tarefas criadas <span className={styles.counter}>0</span></span>
        <span className={styles.doneTasks}>Concluídas <span className={styles.counter}>0</span></span>
      </header>
      {tasks.length === 0 ?
        (
          <main className={styles.main}>
            <ClipboardText size={56} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </main>
        ) :
        (
          tasks.map(task => (
            <main key={task.id} className={styles.mainWithTasks}>
              <input onChange={() => handleCheckTaskAsDone(task.id)} type="radio" name={task.id} id="taskChecked" checked={task.isDone} />
              <p>{ task.content }</p>
              <Trash size={24} onClick={() => handleDeleteTask(task.id)} />
            </main>
          ))
        )
      }
    </div>
  )
}
