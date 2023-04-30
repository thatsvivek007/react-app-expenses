import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <span className="expense-item__amount">Rs. {props.amount}</span>
      </div>
    </div>
  );
}
