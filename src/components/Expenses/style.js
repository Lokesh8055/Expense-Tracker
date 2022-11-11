import styled from "styled-components";
import Card from "../UI/Card";

const Expense = styled(Card)`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;

  .expenses-filter {
  color: white;
  padding: 0 1rem;
}

.expenses-filter__control {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}

.expenses-filter label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.expenses-filter select {
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
}

  .expenses-list__fallback {
    padding-top: 1rem;
    color: white;
    text-align: center;
 }
`

export default Expense