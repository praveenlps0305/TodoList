import React from 'react'
import ListRender from './ListRender';

export default function Next7Days({ list, remove }) {
    const date = new Date()
    const filteredList = list.filter((task) => {
        const diffTime = task.date - date // return milliseconds
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        if (diffDays < 7 && diffDays > 0)
            return true
        return false
    })
    return (
        <div>
            <ListRender filteredList={filteredList} remove={remove} />
            {/* {console.log(filteredList)} */}
        </div>
    )
}
