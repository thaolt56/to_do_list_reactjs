import React from 'react'
import styles from './taskList.module.scss'

interface propsType {
  taskListDone?: boolean
}
export default function TaskList(props: propsType) {
  const { taskListDone } = props
  return (
    <div className={styles.taskContainer}>
      <h5>{taskListDone ? 'List Done' : 'List Warning'}</h5>

      <div className={styles.task}>
        <input type='checkbox' className={styles.taskCheckbox} />
        <span className={styles.taskName}>task test</span>
        <div className={styles.taskActions}>
          <button className={styles.taskBtn}>🖊️</button>
          <button className={styles.taskBtn}>🗑️</button>
        </div>
      </div>
    </div>
  )
}
