import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState();
  const [addExpense, setAddExpense] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHendler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHendler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    console.log(expenseData);
    onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <>
      <button onClick={() => setAddExpense(!addExpense)}>
        Add New Expense
      </button>
      {addExpense && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                value={enteredTitle}
                type="text"
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHendler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2022-01-01"
                max="2027-12-31"
                value={enteredDate}
                onChange={dateChangeHendler}
              />
            </div>
          </div>

          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </>
  );
}
