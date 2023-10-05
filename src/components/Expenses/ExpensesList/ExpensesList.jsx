import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export default function ExpensesList({ items }) {
  return (
    <ul className="expenses-list">
      {items.length === 0 ? (
        <h2 className="expenses-list__fallback">Found No Expense.</h2>
      ) : (
        items.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })
      )}
    </ul>
  );
}
