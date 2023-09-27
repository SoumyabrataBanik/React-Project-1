import '../CSS/ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <Card className="expense-item-date">
                <div className='month'>{month}</div>
                <div className='year'>{year}</div>
                <div className='day'>{day}</div>
        </Card>
    );
}

export default ExpenseDate;