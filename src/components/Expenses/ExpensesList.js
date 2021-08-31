import "./ExpensesList.css";
import ExpenseItem from "./ExpensItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no Items.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items /*filteredExpenses*/
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  );
};

export default ExpensesList;
