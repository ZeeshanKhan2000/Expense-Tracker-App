import { createContext } from "react"

var initialTransactions = [
    { amount: 400, des: "book" },
    { amount: -40, des: "cash" },
    { amount: 800, des: "camera" },
]

const transactionsContext = createContext(initialTransactions);


export default transactionsContext;
