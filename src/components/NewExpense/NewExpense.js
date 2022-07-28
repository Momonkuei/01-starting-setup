import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			/* 
				把 ExpenseForm 中的 expenseData 取出來解構 
				 function名稱 = 傳入的值 =>{
					物件名稱 ={
						解構傳入的值
					}
				 }
			 */
			id: Math.random().toString(),
		};
		// console.log(expenseData);
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
			{/* <ExpenseForm 自己命名 ={function名稱} /> */}
		</div>
	);
};

export default NewExpense;
