import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
	const { budget, expenses } = useContext(AppContext);

	let totalExpense = expenses.reduce((acc, ex) => acc + ex.cost, 0);
	let remaining = budget - totalExpense;

	let alertType = totalExpense > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType}`}>
			<span>Remaining: £{remaining}</span>
		</div>
	);
};

export default Remaining;
