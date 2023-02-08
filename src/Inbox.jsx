import React, { useState, useRef } from 'react'
import styles from './Inbox.module.css'

export default function Inbox({ list, append, remove }) {
    const [newTask, setNewTask] = useState(false)
    const titleRef = useRef("")
    const calendarRef = useRef("")

    const newTaskHandler = () => {
        setNewTask(true)
    }

    const addHandler = (e) => {
        e.preventDefault()
        if (titleRef.current.value === "") {
            window.alert("Task Cannot be Empty")
            return
        }
        let newObj = {
            number: list.length + 1,
            title: titleRef.current.value,
            date: new Date(calendarRef.current.value),
        }
        append(newObj)
        setNewTask(false)
    }

    const cancelHandler = (e) => {
        e.preventDefault()
        setNewTask(false)
    }

    const removeHandler = (removeIndex) => {
        remove(removeIndex)
    }

    return (
        <div>
            <h2>Inbox</h2>
            {!newTask && (
                <button onClick={newTaskHandler} className={styles.btn}>+ Add New</button>
            )}
            {newTask && (
                <form>
                    <input type="text" ref={titleRef} placeholder='Enter Task' />
                    <input type="date" defaultValue="2023-01-01" ref={calendarRef} />
                    <div>
                        <button onClick={(e) => { addHandler(e) }} className={styles.btn}>Add Task</button>
                        <button onClick={(e) => { cancelHandler(e) }} className={styles.btnCancel}>Cancel</button>
                    </div>
                </form>
            )}
            <div className={styles.todoContainer}>
                {list.map((listItem) => {
                    return (
                        <div key={listItem.number} className={styles.todoItem}>
                            <div>
                                <input type="checkbox" name="" id="" onChange={() => removeHandler(listItem.number)} />
                                <span>{listItem.title}</span>
                            </div>
                            <div>({listItem.date.toLocaleDateString()})</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
