import React, { createContext } from 'react'


const initialState = {
    transactions:[
        {   des: "Books", Amount: 100 },
        {   des: "Pen",   Amount: -100  }
    ]
}


export  const GlobalContext = createContext(initialState)


export  const GlobalProvider =  ({children}) => {
    return(
        <GlobalContext.Provider value={{ transactions: state.transactions }  }>
            {children}
        </GlobalContext.Provider>
    )
}