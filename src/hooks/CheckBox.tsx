import React, {useEffect, useRef} from 'react';
import { TableToggleAllRowsSelectedProps } from 'react-table';


const Checkbox = React.forwardRef<HTMLInputElement, TableToggleAllRowsSelectedProps>(({ indeterminate, ...rest }, ref) => {
	//const defaultRef = React.useRef<HTMLInputElement>(null);
	

	const defaultRef = React.useRef(null);
	const resolvedRef = ref || defaultRef;

	if ("current" in resolvedRef) console.log('hi');
	
	
	//const resolvedRef = ref || defaultRef;
	//if (typeof ref === 'function') return;

	useEffect(() => {

		if ("current" in resolvedRef) {
		//	resolvedRef
			//if ("indeterminate" in resolvedRef.current) {
				if (typeof resolvedRef.current?.indeterminate === 'boolean') {
					resolvedRef.current.indeterminate = !!indeterminate
				//};
			}
		};
		
	}, [ref, indeterminate]);

	return (
		<>
			<input type="checkbox" ref={ref} {...rest} />
		</>
	);
});


export default Checkbox;
