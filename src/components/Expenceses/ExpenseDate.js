import React from "react";
import "./ExpenseDate.css";
export default function ExpenseDate(props){
    let date = new Date(props.date);
    return (
        <div className="expense-date">
            <span className="expense-date__month">{date.toLocaleString('en-US', {month: 'long'})}</span>
            <span className="expense-date__year">{date.toLocaleString('en-US', {year: 'numeric'})}</span>
            <span className="expense-date__date">{date.toLocaleString('en-US', {day: '2-digit'})}</span>
        </div>
    )
}