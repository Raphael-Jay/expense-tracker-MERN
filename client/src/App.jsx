import React from 'react'
import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpense,
  Transaction,
  TransactionList,
} from './components'

import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Header title='Expense Tracker' />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
