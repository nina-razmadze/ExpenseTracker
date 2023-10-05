import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export default function ExpensesList({ items, setExpenses }) {
  const handleDelete = (id) => {
    let filtered = items.filter((item) => item.id !== id);
    setExpenses(filtered);
  };
  return (
    <ul className="expenses-list">
      {items.length === 0 ? (
        <h2 className="expenses-list__fallback">Found No Expense.</h2>
      ) : (
        items.map((item) => {
          return (
            <ExpenseItem
              handleDelete={handleDelete}
              item={item}
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
