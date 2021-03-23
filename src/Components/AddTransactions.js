import React from 'react'

export const AddTransactions = () => {
    return (
        <div>
            <h4>Add Transactions</h4>
            <form>
                <div>
                    <label htmlFor='description' id="description">Description</label>
                    <input type="text"placeholder="Detail of Transaction" />
                </div>

                <div>
                    <label htmlFor='Amount' id="Amount">Transaction Amount</label>
                    <input type="number"placeholder="Enter Transaction value" />
                </div>

                <button className="transaction-btn">Add Transactions</button>
            </form>
        </div>
    )
}
