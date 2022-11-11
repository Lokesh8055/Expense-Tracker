import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import { getFullYear } from '../../utils';
import Expense from './style';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter(item => {
    return getFullYear(item.date).toString() === filteredYear
  })

  return (
      <Expense>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredItems}/>
        <ExpensesList  filteredItems={filteredItems} />
      </Expense>
  );
};

export default Expenses;
