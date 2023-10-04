import React, { useState } from "react";
import "./ExpenseFilter.css";

export const ExpensesFilter = ({ setCurrentYear }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <h2>Filter by year</h2>
        <select onChange={(e) => setCurrentYear(e.target.value)}>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
