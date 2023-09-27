// import React, { useState } from 'react';

import "../CSS/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props)
{
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Updated');
    // }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item-right">
                <h2 className="expense-item-title">{props.title}</h2>
                <Card className="expense-item-cost">₹{props.amount}</Card>
            </div>
        </Card>
    );
}

export default ExpenseItem;
