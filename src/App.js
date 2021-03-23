import React from 'react';
import './App.scss';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { AccountSummary } from './Components/AccountSummary';
import { TransactionHistory } from './Components/TransactionHistory';
import { AddTransactions } from './Components/AddTransactions';




function App() {
  return (
    <div>
     <Header />
     <div className="container"> 
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransactions />

     </div>
    </div>
  );
}

export default App;
