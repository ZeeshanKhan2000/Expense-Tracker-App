import  { createContext } from 'react';

// Create the initial state
const initialState = {
    transactions: [
        { id: 1, des: "Income 1", amount: 1000 },
        { id: 2, des: "Expense 1", amount: -100 },
        { id: 3, des: "Income 2", amount: 2000 }
    ]
}

const GlobalContext = createContext(initialState);

export default GlobalContext;