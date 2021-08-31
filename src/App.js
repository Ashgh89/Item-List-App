import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "el1",
    title: "PlayStation Games",
    amount: 110.6,
    date: new Date(2020, 2, 28),
  },

  {
    id: "el2",
    title: "Car Insurance",
    amount: 230,
    date: new Date(2021, 5, 4),
  },
  {
    id: "el3",
    title: "Shopping",
    amount: 300.25,
    date: new Date(2021, 8, 20),
  },
  { id: "el4", title: "Books", amount: 31, date: new Date(2021, 1, 11) },
  {
    id: "el5",
    title: "TV",
    amount: 1000,
    date: new Date(2019, 11, 11),
  },
  {
    id: "el5",
    title: "Books",
    amount: 100,
    date: new Date(2019, 4, 20),
  },
  {
    id: "el5",
    title: "Shoes",
    amount: 200,
    date: new Date(2020, 7, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // Clean way of updating our state when it's based on an older snapshot of the same state.
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
