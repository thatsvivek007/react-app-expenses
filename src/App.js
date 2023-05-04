import React, { useState } from 'react';

import ExpenseItem from './components/Expenceses/ExpenseItem';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import Card from './components/UI/Card';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [products, setProducts] = useState([
        {
            title: "ExpenseItem 1",
            amount: 10,
            date: new Date('2023-04-29')
        },
        {
            title: "ExpenseItem 2",
            amount: 20,
            date: new Date('2023-04-30')
        }
    ])

    function newExpenseHandler(data){
        console.log(data)
        setProducts((oldData)=>{
            console.log(oldData)
            return [...oldData, data]
        })
    }
    return (
        <div>
            <h1>My Demo Shop</h1>

            <ExpenseForm newExpenseHandler={newExpenseHandler}></ExpenseForm>
            <Card>
            <ExpenseItem title={products[0].title} amount={products[0].amount} date={products[0].date.toISOString()} />
            
            <ExpenseItem title={products[1].title} amount={products[1].amount} date={products[1].date.toISOString()} />
            </Card>
        </div>
    );
}