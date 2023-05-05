import { React, useState } from "react";
import './ExpenseForm.css'
export default function ExpenseForm(props) {
    let item = {
        title: '',
        date: '',
        amount: ''
    }
    const [formData, setFormData] = useState(item)
    function handleSubmit(event){
        event.preventDefault()
        setFormData(item);
        let formData = Object.fromEntries(new FormData(event.target));
        props.newExpenseHandler(formData);
        event.target.reset();
    }
    
    return (
        <div className="expense-form">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>Expense Form</h2>
        </div>
        <div className="form-group">
          <label for="title">Title:</label>
          <input type="text" className="form-control" id="title" name="title"/>
        </div>
        <div className="form-group">
          <label for="amount">Amount:</label>
          <input type="text" className="form-control" id="amount" name="amount"/>
        </div>
        <div className="form-group">
          <label for="date">Date:</label>
          <input type="date" className="form-control" min="2019-01-01" id="date" name="date"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>   
);
}