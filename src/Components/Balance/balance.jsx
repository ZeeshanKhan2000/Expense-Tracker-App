import React, { useContext } from 'react'
import { TransactionContext } from '../../Context/GlobalContext';
import styles from './style.module.css'

const Balance = () => {

  const { transactions } = useContext(TransactionContext);
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += transactions[i].amount
      }
    }
    return income
  }
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense += transactions[i].amount
      }
    }
    return expense
  }
  return (
    <>
      <h3 className={styles.sub_heading}> Balance:  <span>${getIncome() + getExpense()}</span> </h3>
    </>
  )
}

export default Balance