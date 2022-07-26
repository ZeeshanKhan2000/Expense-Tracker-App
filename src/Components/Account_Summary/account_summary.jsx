import React from 'react'
import styles from './style.module.css'


const AccountSummary = () => {
  return (
    <div className={styles.Main_wrap}>
        <h4 className={styles.Income}>Income <span>$50</span></h4>
        <h4 className={styles.Expense}>Expense <span>- $10</span></h4>
    </div>
  )
}

export default AccountSummary