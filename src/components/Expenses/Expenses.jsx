import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export default function Expense({ items }) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
    </div>
  );
}
