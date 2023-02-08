import React, { useState } from 'react'
import styles from './Sidenav.module.css'

export default function Sidenav(props) {
    return (
        <ul>
            <li onClick={() => handleClick("INBOX")}>
                <div>Inbox</div>
            </li>
            <li onClick={() => handleClick("TODAY")}>
                <div>Today</div>
            </li>
            <li onClick={() => handleClick("NEXT")} >
                <div >Next 7 Days</div>
            </li>
        </ul>
    )
}
