import "./ExpenseItem.css";
import ExpenseData from "../ExpenseData/ExpenseData";
import Card from "../Card/Card";

export default function ExpenseItem({ date, title, amount }) {
  return (
    <Card className="expense-item">
      <ExpenseData date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}
