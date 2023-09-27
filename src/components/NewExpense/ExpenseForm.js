import React, { useState } from 'react';
import '../CSS/NewExpense.css';
import Card from '../UI/Card';

const ExpenseForm = (props) =>
{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const inputChangeHandler = (event) => setEnteredTitle(event.target.value);

    const amountChangeHandler = (event) => setEnteredAmount(event.target.value);

    const dateChangeHandler = (event) => setEnteredDate(event.target.value);

    const submitHandler = (event) =>
    {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <Card className='new-expense-form'>
            <form onSubmit={submitHandler}>
                <div className='new-expense'>
                    <label>Title</label>
                    <input
                        type='text'
                        maxLength='200'
                        value={enteredTitle}
                        onChange={inputChangeHandler}
                        placeholder='Enter Expense Name'
                    />
                </div>
                <div className='new-expense'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='1' step='1'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                        placeholder='Enter Amount'
                    />
                </div>
                <div className='new-expense'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2000-01-01'
                        max={new Date()}
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        placeholder='dd-mm-yyyy'
                    />
                </div>
                <div className='button new-expense'>
                    <button type='submit' className='btn'>Add Expense</button>
                </div>
            </form>
        </Card>
    );
};

export default ExpenseForm;