import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export default function ExpensesList({ items }) {
  if (items.length === 0) {
    return <h2 className="expenses-list_fallback">Found No Expense.</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
}
