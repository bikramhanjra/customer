import { useState } from "react";
import { Link } from "react-router-dom";

export default function CustomersTable({ tableData, setTableData }) {
  const [filterStatus, setFilterStatus] = useState("");
  const deleteTable = (deleteTable) => {
    const newTable = tableData.filter((_, index) => index !== deleteTable);
    setTableData(newTable);
  };
  return (
    <>
      <div
        className="container d-flex  justify-content-between p-3 border border-black mt-5"
        style={{ width: "100vw" }}
      >
        <h2>Customers</h2>
        <Link to="/AddCustomers">
          <button type="button" className="btn btn-dark">
            Add Customer
          </button>
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <div className="mt-5" style={{ width: "75vw", height: "70vh" }}>
          <table style={{ width: "100%", border: "1px solid black" }}>
            <thead>
              <tr style={{ border: "1px solid black" }}>
                <th>Tool</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
                <th>
                  <select
                    id="status"
                    value={filterStatus}
                    onChange={(e)=> setFilterStatus(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="active">Active</option>
                    <option value="inActive">InActive</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.filter((customer) => filterStatus === "" || customer.status === filterStatus).sort((a,b)=>a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase())).reverse().map((customer, index) => (
                <tr key={index}>
                  <td> <input type="checkbox" onChange={() => deleteTable(index)} /></td>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.email}</td>
                  <td>{customer.password}</td>
                  <td>{customer.address}</td>
                  <td>{customer.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
