import React from "react";

import "../CSS/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../CSS/ExpensesList.css";

const ExpensesList = props =>
{
    if (props.items.length === 0)
    {
        return (<Card className='not-found-message'>No Expenses Found</Card>);
    }

    return (
        <ul className="list-items">
            {
                props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id} //The key helps distinguish elements in a component from one another and should be used when dealing with lists
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    );
};

export default ExpensesList;