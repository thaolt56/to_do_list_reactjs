import React, { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
interface Todo {
  name: string
  id: number
  done: boolean
}
export default function TodoList() {
  const [todos, setTodos] = useState<Todo>()
  return (
    <div className={styles.todoList}>
      <div className={styles.containerTodo}>
        <h3>React App Test</h3>
        <TaskInput />
        <TaskList />
        <TaskList taskListDone />
      </div>
    </div>
  )
}
