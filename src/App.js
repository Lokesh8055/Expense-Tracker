import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import GlobalStyle from './globalStyles';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = expense => {
    localStorage.setItem('expenses', JSON.stringify([expense, ...expenses]))
    setExpenses(prevState => {
      return [expense, ...prevState]
    })
  };

  const items = JSON.parse(localStorage.getItem('expenses')) || expenses;

  return (
    <>
     <GlobalStyle />
    <main>
      <h1 className='heading'>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={items} />
    </main>
    </>
  );
}

export default App;
