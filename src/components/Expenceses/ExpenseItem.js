import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  function ClickHandler(){
    setTitle('updated')
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <span className="expense-item__amount">Rs. {props.amount}</span>
      </div>
      <button onClick={ClickHandler}>Change Title</button>
    </div>
  );
}
