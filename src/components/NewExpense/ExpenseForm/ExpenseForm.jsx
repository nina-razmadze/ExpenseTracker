import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const inputChangeHendler = (identifier, value) => {
    if (identifier === "title") {
      setenteredTitle(value);
    } else if (identifier === "date") {
      setEnteredData(value);
    } else {
      setEnteredAmount(value);
    }
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={() => inputChangeHendler("title")} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={() => inputChangeHendler("amount")}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={() => inputChangeHendler("data")}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
