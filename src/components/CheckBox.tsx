import React, {useEffect, useRef} from 'react';
import { TableToggleAllRowsSelectedProps } from 'react-table';


const Checkbox = React.forwardRef<HTMLInputElement, TableToggleAllRowsSelectedProps>(({ indeterminate, ...rest }, ref) => {
	
	const defaultRef = React.useRef(null);
	const resolvedRef = ref || defaultRef;

	useEffect(() => {

		if ("current" in resolvedRef && typeof resolvedRef.current?.indeterminate === 'boolean') resolvedRef.current.indeterminate = !!indeterminate
		
	}, [ref, indeterminate]);

	return (
		<>
			<input type="checkbox" ref={ref} {...rest} />
		</>
	);
});


export default Checkbox;
