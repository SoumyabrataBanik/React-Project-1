import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 50,
    date: new Date(2023, 7, 31),
  },

  {
    id: "e2",
    title: "New Television",
    amount: 15000,
    date: new Date(2023, 6, 25),
  },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 4000,
    date: new Date(2023, 8, 18),
  },

  {
    id: "e4",
    title: "Tuition Fee",
    amount: 45000,
    date: new Date(2023, 5, 20),
  },
];

const App = () => {
  // using the useState
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Card className="main-tile">
        <Expenses item={expenses} />
      </Card>
    </div>
  );
};

export default App;
