import React from 'react';

const ColumnFilter = ({ column }: any) => {
	const { filterValue, setFilter } = column;

	return (
		<span>
			Filter:{' '}
			<input
				value={filterValue || ''}
				onChange={(e) => setFilter(e.target.value)}
			/>
		</span>
	);
};

export default ColumnFilter;
