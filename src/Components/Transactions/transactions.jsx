import React, { useContext, useState } from 'react'
import GlobalContext from '../../Context/GlobalContext';
import styles from './style.module.css'


const Transactions = () => {
  
    const [des, setDes] = useState();
    const [amount, setAmount] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted")
        setDes("");
        setAmount("");
    }





    return (
        <div className={styles.AddNewTransaction}>
            <h2>Add Transaction</h2>
            <form>
                <div className={styles.flex}>
                    <label htmlFor="des">Description</label>
                    <input type="text" id="des" placeholder='Enter Description' value={des} onChange={(e) => setDes(e.target.value)} />
                </div>
                <div className={styles.flex}>
                    <label htmlFor="num">Amount</label>
                    <input type="number" id="num" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className={styles.submit_BTn}>
                    <button onSubmit={handleSubmit}>Add to Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default Transactions