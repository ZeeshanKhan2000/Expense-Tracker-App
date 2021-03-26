import React, { useState } from 'react'

const AddTransactions = () => {

const [text,setText] = useState('');
const [amount,setAmount] = useState();

    return (

        <div className="Add-Transitions">
            <h3>Add Transactions</h3><br /> <hr />
            <form >
                <div><br />
                    <label htmlFor='description' className="Add-Transitions-Des">Description</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)} required className="Add-Transitions-Input" type="text" placeholder="Detail of Transaction" /><br />
                </div>
                <div><br />
                    <label htmlFor='Amount' className="Add-Transitions-Amount" className="Add-Transitions-Amount">Transaction Amount</label>
                    <input value={amount} onChange={(e)=>setAmount(e.target.value)}  required className="Add-Transitions-Input" type="number" placeholder="Enter Transaction Value" /><br /><br />
                </div><br />
                <button className="Add-Transitions-btn" type="submit">Add Transactions</button>
            </form>
        </div>
    )
}

export default AddTransactions;