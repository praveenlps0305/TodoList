import React from 'react'
import ListRender from './ListRender';

export default function Today({ list, remove }) {
    const date = new Date()
    const filteredList = list.filter((task) => {
        if (date.getFullYear() !== task.date.getFullYear()) {
            return false
        }
        if (date.getMonth() !== task.date.getMonth()) {
            return false;
        }
        if (date.getDate() !== task.date.getDate()) {
            return false;
        }
        return true
    })
    return (
        <div>
            <ListRender filteredList={filteredList} remove={remove} />
        </div>
    )
}
