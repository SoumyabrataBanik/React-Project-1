import React, { useState } from "react";

import "../CSS/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../FilterExpense/ExpenseFilter";

const Expenses = (props) =>
{
    const [filteredYear, setFilteredYear] = useState("2023");

    const filterChangeHandler = (selectedYear) =>
    {
        setFilteredYear(selectedYear);
    };

    const filteredExpense = props.item.filter((expense) =>
    {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expenseContent = <Card className="not-found-message">No Expenses Found!</Card>;

    if (filteredExpense.length > 0)
    {
        expenseContent = filteredExpense.map((expense) => (
            <ExpenseItem
                key={expense.id} //The key helps distinguish elements in a component from one another and should be used when dealing with lists
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <Card>
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />

            {expenseContent}
        </Card>
    );
};

export default Expenses;
