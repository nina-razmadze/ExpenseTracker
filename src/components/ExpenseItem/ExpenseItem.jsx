import "./ExpenseItem.css";
import ExpenseData from "../ExpenseData/ExpenseData";
import Card from "../Card/Card";
import { useState } from "react";

export default function ExpenseItem({ date, title, amount }) {
  const [inputValue, setInputValue] = useState("");

  const changeInput = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };
  console.log(inputValue);
  return (
    <Card className="expense-item">
      <ExpenseData date={date} />
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <div>{title}</div>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button>Change Item</button>
    </Card>
  );
}
