import ColumnFilter from '../hooks/ColumnFilter';

export const COLUMNS = [
	{
		Header: 'Application Id',
		Footer: 'Application Id',
		accessor: 'application_id',
		Filter: ColumnFilter,
		disableFilters: true,
	},
	{
		Header: 'Company Name',
		Footer: 'Company Name',
		accessor: 'company_name',
		Filter: ColumnFilter,
		disableFilters: true,
	},
	{
		Header: 'Primary Applicant',
		Footer: 'Primary Applicant',
		accessor: 'primary_applicant',
		Filter: ColumnFilter,
		disableFilters: true,

	},
	{
		Header: 'Application State',
		Footer: 'Application State',
		accessor: 'application_state',
		Filter: ColumnFilter,
		disableFilters: true,

		
	},
	{
		Header: 'Time Last Modified',
		Footer: 'Time Last Modified',
		accessor: 'time_last_modified',
		disableFilters: true,
		Filter: ColumnFilter,
	},
	{
		Header: 'Amt. Requested',
		Footer: 'Amt. Requested',
		accessor: 'amt_requested',
		Filter: ColumnFilter,
		disableFilters: true,
	},
	{
		Header: 'Offered',
		Footer: 'Offered',
		accessor: 'offered',
		Filter: ColumnFilter,
		disableFilters: true,
	},
	{
		Header: 'Amt. Received',
		Footer: 'Amt. Received',
		accessor: 'amt_received',
		Filter: ColumnFilter,
		disableFilters: true,
	}
];

export const GROUPED_COLS = [
	{
		Header: 'Id',
		Footer: 'Id',
		accessor: 'id',
	},
	{
		Header: 'Contact',
		Footer: 'Contact',
		columns: [
			{
				Header: 'Company Name',
				Footer: 'Company Name',
				accessor: 'company_name',
			},
			{
				Header: 'Account Holder',
				Footer: 'Account Holder',
				accessor: 'account_holder',
			},
			{
				Header: 'Email',
				Footer: 'Email',
				accessor: 'email',
			},
			{
				Header: 'Phone',
				Footer: 'Phone',
				accessor: 'phone',
			},
		],
	},
	{
		Header: 'Info',
		Footer: 'Info',
		columns: [
			{
				Header: 'Start',
				Footer: 'Start',
				accessor: 'start_date',
			},
			{
				Header: 'City',
				Footer: 'City',
				accessor: 'city',
			},
		],
	},
];
