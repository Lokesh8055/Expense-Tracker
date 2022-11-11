import React from 'react';
import ExpenseForm from './ExpenseForm';
import NewExpenseComponent from './style';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <NewExpenseComponent>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </NewExpenseComponent>
  );
};

export default NewExpense;
