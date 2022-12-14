import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    if(props.filteredItems.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found</h2>
    }
    
  return (
    <ul>
       {props.filteredItems.map(item => (
         <ExpenseItem key={item.id} expense={item}/>
      ))}
    </ul>
  )
}

export default ExpensesList