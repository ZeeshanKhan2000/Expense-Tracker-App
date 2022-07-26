import React, { useContext } from 'react'
import GlobalContext from '../../Context/GlobalContext'
import styles from './style.module.css'


const History = () => {
    
    let Alltransactions = useContext(GlobalContext)

    return (
        <div className={styles.main_wrap}>
            <h2> Transactions History</h2>
            <ul>
                {   
                    Alltransactions.transactions.map( (value ) => { 
                        return (
                            <li key={value.id} className={value.amount < 0 ? styles.minus : styles.plus}>
                            {value.des}
                                <span> {value.amount}</span>
                            <button className={styles.clossBtn}>X</button> 
                        </li>
                        )
                   }
                 )
                }
                   
                {/* <li className={styles.minus}>
                    {Alltransactions.transactions[0].description}
                    {/* Pen 
                    <span>-$10</span>
                    <button className={styles.clossBtn}>X</button>
                </li> */}
                {/* {console.log(Alltransactions.transactions)} */}

            </ul>
        </div>
    )
}

export default History