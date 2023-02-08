import React from 'react'
import styles from './ListRender.module.css'

export default function ListRender({ filteredList, remove }) {

    return (
        <>
            {filteredList.map((listItem) => (
                <div key={listItem.number} className={styles.todoItem}>
                    <div>
                        <input type="checkbox" name="" id="" onChange={() => remove(listItem.number)} />
                        <span>{listItem.title}</span>
                    </div>
                    <div>({listItem.date.toLocaleDateString()})</div>
                </div>
            ))}
        </>
    )
}
