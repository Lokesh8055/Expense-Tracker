import React from 'react';
import styled from 'styled-components';
import { getFullYear } from '../../utils';

const ExpenseDateComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;

& month {
  font-size: 0.75rem;
  font-weight: bold;
}

& year {
  font-size: 0.75rem;
}

& day {
  font-size: 1.5rem;
  font-weight: bold;
}

`

const ExpenseDate = (props) => {
  const month = new Date(props.date).toLocaleString('en-US', { month: 'long' });
  const day = new Date(props.date).toLocaleString('en-US', { day: '2-digit' });
  const year = getFullYear(props.date)

  return (
    <ExpenseDateComponent>
      <div className='month'>{month}</div>
      <div className='year'>{year}</div>
      <div className='day'>{day}</div>
    </ExpenseDateComponent>
  );
};

export default ExpenseDate;
