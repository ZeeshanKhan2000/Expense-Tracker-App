import React from 'react'
import styles from './style.module.css'


const NewTransaction = ({ initialTransaction }) => {
  return (
      <li key={initialTransaction.id} className={styles.plus}>
          {initialTransaction.description}
          <span>  {initialTransaction.transactionAmount}</span>
          <button className={styles.clossBtn}>X</button>
      </li>


                // <li className={styles.minus}>
                //     Pen
                //     <span>-$10</span>
                //     <button className={styles.clossBtn}>X</button>
                // </li> 




  )
}

export default NewTransaction