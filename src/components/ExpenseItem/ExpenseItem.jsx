import Card from "../Card/Card";
import ExpenseData from "../ExpenseData/ExpenseData";

import "./ExpenseItem.css";

export default function ExpenseItem({ date, title, amount }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseData date={date} />
        <div className="expense-item__description">
          <div>{title}</div>
        </div>
        <div className="expense-item__price">${amount}</div>
      </Card>
    </li>
  );
}
