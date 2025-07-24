import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <form className="expense-form">
      <input type="text" placeholder="License Plate" />
      <input type="number" placeholder="Toll Amount" />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
