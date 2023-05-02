import React, { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../@types/todo.type'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter((todo) => !todo.done)
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  console.log('todo', todos)

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((todo) => todo.id === id)
    if (findedTodo) {
      setCurrentTodo(findedTodo)
    }
  }
  const finishEditTodo = () => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return todo
      })
    })
    setCurrentTodo(null)
  }
  return (
    <div className={styles.todoList}>
      <div className={styles.containerTodo}>
        <h3>React App Test</h3>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />
        <TaskList todos={notdoneTodos} handleDoneTodo={handleDoneTodo} startEditTodo={startEditTodo} />
        <TaskList taskListDone todos={doneTodos} handleDoneTodo={handleDoneTodo} startEditTodo={startEditTodo} />
      </div>
    </div>
  )
}
