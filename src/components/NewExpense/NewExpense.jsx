import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

export default function NewExpense({ addOnExpense }) {
  const saveExpenseDatahandler = (enteredExpenseData, addExpenxseHandler) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addOnExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} />
    </div>
  );
}
