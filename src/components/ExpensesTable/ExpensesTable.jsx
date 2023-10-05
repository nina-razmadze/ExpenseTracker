import React, { useState } from "react";
import "./ExpensesTable.css";

export default function ExpensesTable({ items }) {
  const [limit, setLimit] = useState(0);

  const handleOnChange = (e) => {
    setLimit(e.target.value);
    +limit;
  };
  let amount = items.map((item) => item).reduce((acc, curr) => acc + curr, 0);
  console.log(amount);
  return (
    <div className="expenses_table">
      <div className="grid-container">
        <div className="grid-item ">In Hand</div>
        <div className="grid-item ">Spendings</div>
        <div className="grid-item ">Saved</div>
        <input
          onChange={handleOnChange}
          value={limit}
          type="number"
          min="0"
          step="100"
        />
        <div className="grid-item ">{amount}</div>
        <div className="grid-item ">Item 1</div>
      </div>
    </div>
  );
}
