import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = props => {
	//

	/* 
    
    為什麼命名方式使用const
    我們並沒有用 等號去賦值，更換值的方式是透過 React的其他功能，
    所以相對的指示呼叫相關 function 而不是賦予新的值

    useState 註冊一些狀態， 一種值 一些狀態 對於調用他的組件
    =>它為特定組件實例去註冊它

    此外，每當狀態改變時，也只是針對那特定的項目

    */

	const [title, setTitle] = useState(props.title);
	// console.log('ExpenseItem evaluated by React');

	const clickHandler = () => {
		// title = 'Updated!';
		setTitle('Updated!!');
		//更新功能名稱（更動的值）

		console.log(title);
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
