import React, { useContext } from 'react'
import { TransactionContext } from '../../Context/GlobalContext';

import styles from './style.module.css'


const History = () => {
    const { transactions, addTransaction } = useContext(TransactionContext);

    return (
        <div className={styles.main_wrap}>
            <h2>Transactions History</h2>
            <ul>
                {   
                    transactions.map((transObj, ind ) => { 
                    return (
                        <li key={ind} className={transObj.amount < 0 ? styles.minus : styles.plus}>
                            {transObj.desc}
                            <span> {transObj.amount}</span>
                            <button className={styles.clossBtn}>X</button> 
                        </li>
                        )
                    }
                 )
                }
            </ul>
        </div>
    )
}

export default History