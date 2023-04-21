import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	let total = expenses.reduce((acc, ex) => acc + ex.cost, 0);
	return (
		<div className='alert alert-primary'>
			<span>Spent so far: £{total}</span>
		</div>
	);
};

export default ExpenseTotal;
