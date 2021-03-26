import React from 'react'

const TransactionHistory = () => {
    return (
        <div className="Transition-History">
            <h3>Transaction History</h3> <br /><hr />
            <ul>
                <li>
                    <span>cash</span>
                    <span>500</span>
                </li>
                
                <li>
                    <span>books</span>
                    <span>750</span>
                </li>
            </ul>
        </div>
    )
}

export  default TransactionHistory;