import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import "./table.css";

const DataTable = ({ customerData, customerColumns }) => {
  const columns = useMemo(() => customerColumns, [customerColumns]);

  const data = useMemo(() => customerData, [customerData]);
  const tableInstance = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;
  return (
    <>
      <div className="flex w-full justify-between overflow-scroll items-center">
        <h1 className="font-semibold text-2xl">Customer List</h1>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table className="mt-10 container" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((col) => {
                  return (
                    <th
                      className="text-primaryColor font-light"
                      {...col.getHeaderProps(col.getSortByToggleProps())}
                    >
                      {col.render("Header")}
                      {col.isSorted ? (col.isSortedDesc ? " ⬇️" : " ⬆️") : ""}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center gap-20 mt-3">
        <span>
          Page{" "}
          <strong>
            <span>
              {" "}
              Go to:{" "}
              <input
                className="text-center w-10"
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
                type="number"
                defaultValue={pageIndex + 1}
              />{" "}
            </span>{" "}
            of {pageOptions.length}{" "}
          </strong>
        </span>

        <div className="flex gap-5">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>
          <button disabled={!canPreviousPage} onClick={() => previousPage()}>
            {"<"}
          </button>
          <button disabled={!canNextPage} onClick={() => nextPage()}>
            {">"}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </div>
      </div>
    </>
  );
};

export default DataTable;
