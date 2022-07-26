import React from 'react'
import styles from './style.module.css'

const History = () => {
    return (
        <div className={styles.main_wrap}>
            <h2> Transactions History</h2>
            <ul>
                <li className={styles.plus}>
                    Books
                    <span>$1000</span>
                    <button className={styles.clossBtn}>X</button>
                </li>
                <li className={styles.minus}>
                    Pen
                    <span>-$10</span>
                    <button className={styles.clossBtn}>X</button>
                </li>
            </ul>
        </div>
    )
}

export default History