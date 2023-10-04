import { useEffect, useState } from "react";

import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
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
      <ExpensesList items={filteredData} />
    </Card>
  );
}
