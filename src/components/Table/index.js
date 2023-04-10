import { usePagination, useTable, useExpanded, useSortBy } from "react-table";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import { SortedIcon } from "../../asset/config-icons";
function DataTable({
  columns: userColumns,
  data = [],
  loading = false,
  changePageHandler,
  totalPage = 20,
  limit,
  forcePage,
  defaultSort,
}) {
  const handleSortBy = (column, setSortBy) => {
    if (column.disableSortBy) return;
    const desc =
      column.isSortedDesc === true ? false : column.isSortedDesc === false;
    setSortBy([{ id: column.id, desc }]);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setPageSize,
    setSortBy,
  } = useTable(
    {
      columns: userColumns,
      data,
      initialState: {
        pageSize: limit ?? 10,
      },
    },
    useSortBy,
    useExpanded, // Use the useExpanded plugin hook
    usePagination
  );

  return (
    <>
      <div className="w-full overflow-x-auto">
        {loading ? (
          <div className="flex h-[500px] w-full items-center justify-center">
            <h1>loaing</h1>
          </div>
        ) : (
          <table {...getTableProps()} className="rounded-md w-full mb-4 mt-4">
            <thead className="w-full mb-4 sticky top-0 z-10 bg-gray-50 text-center text-sm text-gray-400">
              {headerGroups.map((headerGroup, i) => (
                <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, i2) => (
                    <th
                      key={i2}
                      {...column.getHeaderProps()}
                      className=" px-3 py-2 cursor-pointer select-none"
                      onClick={() => handleSortBy(column, setSortBy)}
                    >
                      <div className="flex justify-between gap-6 items-center">
                        <div>{column.render("Header")}</div>
                        {!column.disableSortBy && (
                          <div className="">
                            {column.isSortedDesc === undefined ||
                            column.isSortedDesc === true ? (
                              <SortedIcon />
                            ) : (
                              <SortedIcon className="text-indigo-500" />
                            )}
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <>
                    <tr key={i} {...row.getRowProps()}>
                      {row.cells.map((cell, i2) => {
                        return (
                          <td
                            key={i2}
                            {...cell.getCellProps()}
                            className="px-4 py-4 font-medium  text-sm"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  </>
                );
              })}
              <tr></tr>
            </tbody>
          </table>
        )}

        {/* pagination */}
        <div className="p-2 items-center rounded-md flex  w-full bg-gray-50 justify-between">
          <span className="text-gray-400">Showing 10 Data Customers</span>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={changePageHandler}
            pageRangeDisplayed={3}
            pageCount={totalPage}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active-page"
          />
        </div>
      </div>
    </>
  );
}

export default DataTable;
