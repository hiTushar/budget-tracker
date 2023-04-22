import React, { useContext, useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = (props) => {
	const { expenses } = useContext(AppContext);
	const { search } = props;
	const [filteredList, setFilteredList] = useState(expenses);

	useEffect(() => {
		const fuse = new Fuse(expenses, {
			keys: ["name"]
		});
		if(!search.length) {
			setFilteredList(expenses);
			return;
		}
		const result = fuse.search(search);
		setFilteredList(result.reduce((acc, obj) => acc.concat(obj.item), []));
	}, [search, expenses]);

    return (
		<ul className='list-group'>
			{filteredList.map((expense) => {
				return <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />;
			})}
		</ul>
    )
}

export default ExpenseList
