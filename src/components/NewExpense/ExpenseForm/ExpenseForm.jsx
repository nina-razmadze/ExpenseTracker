import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");
  const [addExpense, setAddExpense] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: +enteredAmount,
    };
    onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  const toggleHighlight = () => {
    setAddExpense(!addExpense);
  };
  return (
    <div style={{ position: " relative" }}>
      <button
        onClick={toggleHighlight}
        className={`button ${addExpense ? "highlighted" : ""}`}
      >
        {addExpense ? "Cancel" : "Add New Expense"}
      </button>
      {addExpense && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                value={enteredTitle}
                type="text"
                name="text"
                onChange={(e) => setEnteredTitle(e.target.value)}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={(e) => setEnteredAmount(e.target.value)}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2022-01-01"
                max="2027-12-31"
                value={enteredDate}
                onChange={(e) => setEnteredDate(e.target.value)}
              />
            </div>
          </div>

          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
}
