import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	// document.getElementById('').addEventListener('click', event => {});
	//默認的模式

	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	//用空字串初始化，確保所有輸入資料都是字串。

	const titleChangeHandler = event => {
		// console.log(event.target.value);
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = event => {
		// console.log(event.target.value);
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = event => {
		// console.log(event.target.value);
		setEnteredAmount(event.target.value);
	};

	return (
		<form action="#">
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} />
				</div>

				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="1"
						step="1"
						onChange={amountChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2022-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;