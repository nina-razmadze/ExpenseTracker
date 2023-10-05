import React, { useState } from "react";
import "./ExpensesTable.css";

export default function ExpensesTable({ items }) {
  const [limit, setLimit] = useState(0);
  const [savedMoney, setSavedMoney] = useState(0);
  //   const [spend, setSpend] = useState(0);
  //  if (percent) {
  //    let percent = 0.1 * limit;
  //    alert(`You Have ${percent}`);
  //  }
  const handleOnChange = (e) => {
    setLimit(e.target.value);

    +limit;
  };

  let spend = items
    .map((item) => item.amount)
    .reduce((acc, curr) => acc + curr, 0);

  const submitHandler = (event) => {
    event.preventDefault();
    let percent = 0.1 * savedMoney;
    if (savedMoney == percent) {
      alert("only have");
    }
    setSavedMoney(Math.round(limit - spend));

    console.log(savedMoney);
  };
  return (
    <div className="expenses_table">
      <form onSubmit={submitHandler}>
        <div className="grid-container">
          <div className="grid-item ">In Hand</div>
          <div className="grid-item ">Spendings</div>
          <div className="grid-item ">Saved</div>
          <div className="grid-item "></div>

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
