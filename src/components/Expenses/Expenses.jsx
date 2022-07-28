import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expense = props => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
		console.log(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangefilter={filterChangeHandler}
				/>
				{props.items.map(expense => {
					return (
						<ExpenseItem
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					);
				})}
			</Card>
		</div>
	);
};

export default Expense;
