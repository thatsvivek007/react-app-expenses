import React, { useState } from 'react';

import ExpenseItem from './components/Expenceses/ExpenseItem';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import Card from './components/UI/Card';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [items, setitems] = useState([])
    let expensesContent = <p>No expences found!</p>
    if(items.length){
        expensesContent = items.map((expense)=> <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date.toISOString()} />)
    }
    function newExpenseHandler(data){
        setitems((oldData)=>{
            data.date = new Date(data.date);
            data.id = oldData.length + 1
            return [data, ...oldData]
        })
    }
    return (
        <div>
            <h1>My Demo Shop</h1>

            <ExpenseForm newExpenseHandler={newExpenseHandler}></ExpenseForm>
            <Card>
                {expensesContent}
            </Card>
        </div>
    );
}