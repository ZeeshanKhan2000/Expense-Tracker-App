import './index.css';
import { Header, Balance, AccountSummary, History, Transactions } from './Components'

import { AppReducer } from './Context/reducer';
import { useContext, useReducer } from 'react';
import GlobalContext from './Context/GlobalContext';

function App() {


  let initialState = useContext(GlobalContext);

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const Delete=(id)=> {
    dispatch({
      type: "DELETE",
      payload: id
    });
  };

  const Add=(Obj)=>{
    dispatch({
      type: "ADD",
      payload: Obj
    });
  };




  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      Delete,
      Add
    }}>
      <div className="container">
          <Header/>
          <Balance />
          <AccountSummary />
          <History />
          <Transactions />
        </div>
    </GlobalContext.Provider>
  );
}

export default App;
