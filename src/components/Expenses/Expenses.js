import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import "../CSS/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../FilterExpense/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) =>
{
    const [filteredYear, setFilteredYear] = useState("2023");

    const filterChangeHandler = (selectedYear) =>
    {
        setFilteredYear(selectedYear);
    };

    const filteredExpense = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card>
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />

            <ExpensesChart expenses={filteredExpense} />

            <ExpensesList items={filteredExpense} />
        </Card>
    );
};

export default Expenses;
