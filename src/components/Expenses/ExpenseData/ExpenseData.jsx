import React from "react";
import "./ExpenseData.css";

export default function ExpenseData({ date }) {
  const month = date.toLocaleString("en-US", {
    month: "long",
  });
  const day = date.toLocaleString("en-US", {
    month: "2-digit",
  });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
