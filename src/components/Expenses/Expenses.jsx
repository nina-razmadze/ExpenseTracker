import { useEffect, useState } from "react";

import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

import "./Expenses.css";

export default function Expense({ items }) {
  const [currentYear, setCurrentYear] = useState();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredItems = items.filter((item) => {
      const year = item.date.getFullYear();
      return year === Number(currentYear);
    });
    setFilteredData(filteredItems);
  }, [currentYear, items]);

  return (
    <Card className="expenses">
      <ExpensesFilter setCurrentYear={setCurrentYear} />
      {filteredData.length === 0 ? (
        <p>No Expenses Found.</p>
      ) : (
        filteredData.map((item) => {
          console.log(filteredData);

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
    </Card>
  );
}
