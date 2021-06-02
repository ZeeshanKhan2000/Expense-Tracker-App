import React, { useContext } from 'react'

//import context
import transactionsContext from './../Context/globalContext';

const TransactionHistory = () => {
    let transactions = useContext(transactionsContext)
    
    return (
        <div className="Transition-History">
         <h3>Transaction History</h3> <hr />
            <ul>
                {transactions.map((transObject, ind) => {
                    return (
                        <li>
                            <span> {transObject.des}</span>
                            <span> {transObject.amount}</span>
                        </li>
                           )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default TransactionHistory;