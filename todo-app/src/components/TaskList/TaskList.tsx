import React from 'react'
import styles from './taskList.module.scss'
import { Todo } from '../../@types/todo.type'

interface propsType {
  taskListDone?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
}
export default function TaskList(props: propsType) {
  const { taskListDone, todos, handleDoneTodo, startEditTodo } = props
  const onChangeCheckBox = (idTodo: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(idTodo, event.target.checked)
  }

  return (
    <div className={styles.taskContainer}>
      <h5>{taskListDone ? 'List Done' : 'List Warning'}</h5>

      {todos.map((todo) => (
        <div key={todo.id}>
          <div className={styles.task}>
            <input
              type='checkbox'
              className={styles.taskCheckbox}
              checked={todo.done}
              onChange={onChangeCheckBox(todo.id)}
            />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>

            <div className={styles.taskActions}>
              <button onClick={() => startEditTodo(todo.id)} className={styles.taskBtn}>
                🖊️
              </button>
              <button className={styles.taskBtn}>🗑️</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
