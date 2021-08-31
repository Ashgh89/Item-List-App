//We need {useState}->this function allow us to define values as state where changes to these values should reflect in the component function being call again, which is a key difference to the regular finction like let title = props.title;
import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // Always the first element (title) is the current state value and the second element is a function for updating that.
  // const [title, setTitle] = useState(props.title);
  // // let title = props.title;
  // const clickHandler = () => {
  //   // title = "Updated!!!!!";
  //   setTitle("Updated!!");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

// NOTICE You can name your ExpenseItem Parameter whatever you want, like data or ...
// But i wanted to name it props.
