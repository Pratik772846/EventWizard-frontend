import React, { useMemo, useState, useCallback } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header';

const Employees = () => {
  const employeesData = [
    {
      id: 1,
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
    },
    {
      id: 2,
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
    },
    // Add more employee objects with unique EmployeeID and id
    // ...
  ];

  const columns = useMemo(
    () => [
      {
        Header: 'Employee',
        accessor: 'Name',
        width: 150,
        textAlign: 'center',
      },
      {
        Header: 'Designation',
        accessor: 'Title',
        width: 170,
        textAlign: 'center',
      },
      {
        Header: 'Country',
        accessor: 'Country',
        width: 120,
        textAlign: 'center',
      },
      {
        Header: 'Hire Date',
        accessor: 'HireDate',
        width: 135,
        textAlign: 'center',
      },
      {
        Header: 'Reports To',
        accessor: 'ReportsTo',
        width: 120,
        textAlign: 'center',
      },
      {
        Header: 'Employee ID',
        accessor: 'EmployeeID',
        width: 125,
        textAlign: 'center',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data: employeesData }, useGlobalFilter);

  const { globalFilter } = state;
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = useCallback(
    (value) => {
      setGlobalFilter(value);

      // Filter the data based on search value
      const filteredData = employeesData.filter(
        (employee) =>
          employee.Name.toLowerCase().includes(value.toLowerCase()) ||
          employee.Name.split(' ')[0].toLowerCase().includes(value.toLowerCase()) ||
          employee.Name.split(' ')[1].toLowerCase().includes(value.toLowerCase())
      );

      if (filteredData.length === 0) {
        toast.error('No matching person found!');
      }

      setSearchResult(filteredData);
    },
    [setGlobalFilter, employeesData]
  );

  return (
    <div className="p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category="Page" title="Employees" />
      <div>
        <input
          type="text"
          value={globalFilter || ''}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {(searchResult.length > 0 ? searchResult : rows).map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Employees;
