import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul>
                <li className="plus"><span>$100</span> <button className="delete-btn">X</button></li>
                <li className="minus"><span>-$20</span> <button className="delete-btn">X</button> </li>
            </ul>
        </div>
    )
}
