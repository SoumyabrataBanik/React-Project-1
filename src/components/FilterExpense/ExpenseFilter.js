import React from "react";

import "../CSS/ExpenseFilter.css";

const ExpenseFilter = (props) =>
{
    const onDropDownChangeHandler = (event) =>
    {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="filter-body">
            <label>Filter By Year</label>

            <div>
                <select value={props.selected} onChange={onDropDownChangeHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
