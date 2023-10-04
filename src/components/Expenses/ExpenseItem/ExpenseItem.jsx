import Card from "../../NewExpense/Card/Card";
import ExpenseData from "../ExpenseData/ExpenseData";

import "./ExpenseItem.css";

export default function ExpenseItem({ date, title, amount }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseData date={date} />
        <h2 className="expense-item__description">{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </Card>
    </li>
  );
}
