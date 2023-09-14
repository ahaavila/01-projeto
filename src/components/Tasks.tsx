import { ClipboardText } from 'phosphor-react';

import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <header className={styles.header}>
        <span className={styles.createdTasks}>Tarefas criadas <span className={styles.counter}>0</span></span>
        <span className={styles.doneTasks}>Concluídas <span className={styles.counter}>0</span></span>
      </header>
      <hr />
      <main className={styles.main}>
        <ClipboardText size={56} />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </main>
    </div>
  )
}
