import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

export default function NewExpense() {
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} />
    </div>
  );
}
