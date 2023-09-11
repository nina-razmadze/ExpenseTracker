import React from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type='text'/>
        </div>
      </div>
    </form>
  );
}
