import React from 'react';

const SelectedRows = ({ selectedRows }: any) => {
	return (
		<pre>
			<code>
				{JSON.stringify(
					{
						selectedRows: selectedRows.map((row: any) => row.original),
					},
					null,
					2
				)}
			</code>
		</pre>
	);
};

export default SelectedRows;
