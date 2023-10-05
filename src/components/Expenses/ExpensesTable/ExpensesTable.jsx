import React, { useEffect, useState } from "react";
import "./ExpensesTable.css";

export default function ExpensesTable({ items }) {
  const [limit, setLimit] = useState(0);
  const [savedMoney, setSavedMoney] = useState(0);

  const handleOnChange = (e) => {
    setLimit(e.target.value);
    +limit;
  };

  let spend = items
    .map((item) => Math.round(item.amount))
    .reduce((acc, curr) => acc + curr, 0);

  const submitHandler = (event) => {
    event.preventDefault();
    setSavedMoney(Math.round(limit - spend));
  };

  useEffect(() => {
    setTimeout(() => {
      let percent = limit * 0.1;
      console.log(percent);
      if (savedMoney !== limit && savedMoney == percent) {
        alert(`You have ${percent}$ left`);
      } else if (limit !== 0 && spend > limit) {
        alert(`You have exceeded the annual spending limit`);
      }
    }, 1000);
  }, [savedMoney]);

  return (
    <div className="expenses__table">
      <form onSubmit={submitHandler}>
        <div className="grid-container">
          <div className="grid-item ">In Hand</div>
          <div className="grid-item ">Annual Spendings</div>
          <div className="grid-item ">Saved</div>
          <div className="grid-item"></div>
          <input
            onChange={handleOnChange}
            value={limit}
            className="number-input"
            type="number"
            min="0"
            step="100"
          />
          <div className="grid-item">
            <h2 className="title">${spend}</h2>
          </div>
          <div className="grid-item ">
            <h2 className="title">${savedMoney}</h2>
          </div>
          <div className="grid-item">
            <button className="grid-item__btn" type="submit">
              √
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
