import React from 'react';

//import All Component
import Header from './Components/Header';
import Balance  from './Components/Balance';
import AccountSummary  from './Components/AccountSummary';
import TransactionHistory  from './Components/TransactionHistory';
import AddTransactions  from './Components/AddTransactions';

//Import css throught sass (Syntactically Awesome StyleSheet) 
//which is css Preprocessor/Precompiler
import './Main.scss';


function App() {
  return (
     <div className="container">
         <Header /> 
         <Balance />
         <AccountSummary />
         <TransactionHistory />
         <AddTransactions />
     </div>
  );
}
export default App;