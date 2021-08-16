import React, { useMemo, useState, useEffect } from "react";
import SelectedRows from "./SelectedRows";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  TableOptions,
  TableToggleAllRowsSelectedProps,
  UseRowSelectInstanceProps
} from "react-table";

import Checkbox from "../hooks/CheckBox";
import "../style/table.css";

type row = {
    application_id: number,
	company_name: string,
	primary_applicant: string,
	application_state: string,
	time_last_modified: string,
    amt_requested: string,
	offered: string,
    amt_received: string
}

const Table = ({columns, data, updateMyData}:TableOptions<any>) => {
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    selectedFlatRows,
    state,
  } = useTable(
    {
      columns,
      data,
      updateMyData
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }: UseRowSelectInstanceProps<row> ) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }:any) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  const { pageIndex, pageSize } = state;

  const [selectedRows, setSelectedRows] = useState([] as any);

  useEffect(() => {
    setSelectedRows([...selectedFlatRows]);
  }, [selectedFlatRows]);

  return (
    <div>
      <h3>React-Table Table</h3>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " ⬇️"
                        : " ⬆️"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page <strong>{pageIndex + 1}</strong> of{" "}
          <strong>{pageOptions.length}</strong>
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Prev
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
        <p>
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{
              width: "50px",
            }}
          />
        </p>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageOpt) => (
            <option key={pageOpt} value={pageOpt}>
              Display Total: {pageOpt}
            </option>
          ))}
        </select>
      </div>
      <SelectedRows selectedRows={selectedRows} />
    </div>
  );
};

export default Table;
