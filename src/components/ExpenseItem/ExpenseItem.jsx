import "./ExpenseItem.css";
import ExpenseData from "../ExpenseData/ExpenseData";

export default function ExpenseItem({ date, title, amount }) {
  return (
    <div className="expense-item">
      <ExpenseData date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
