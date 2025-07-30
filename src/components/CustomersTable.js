import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { setTableData } from "../redux/customer.slice";

export default function CustomersTable({}) {
  const tableData = useSelector((state)=> state.customer.tableData)
  console.log("tableData", tableData)
  
  const dispatch = useDispatch()

  const [filterStatus, setFilterStatus] = useState("");
  const [sortTableData, setSortTableData] = useState([]);
  const [idSelect, setIdSelect] = useState([]);

  const [search, setSearch] = useState("")

  const deleteBtn = () => {
     const newTable = tableData.filter((customer) => {
      return !idSelect.includes(customer.id.toString());
    });
    dispatch(setTableData(newTable))
    console.log("new table", newTable);
  };


  const handleSelect = (select) => {
    if(select.target.checked){
       setIdSelect((recentID) => {
      return [...recentID, select.target.id];
    })
    }else{
      setIdSelect((recentID)=>{
        return [idSelect.filter((item)=> item !== recentID)]
      })
    }
    console.log("selecet id", idSelect);
  };

  const sortingData = () => {
    return tableData
      .filter(
        (customer) => filterStatus === "" || (customer.status === filterStatus && customer.firstName.toLowerCase().includes(search.toLowerCase()))
      )
      .sort((a, b) =>
        b.lastName.toLowerCase().localeCompare(a.lastName.toLowerCase())
      )
  };

  useEffect(() => {
    setSortTableData(sortingData()); // eslint-disable-next-line 
  }, [tableData, filterStatus,]);

  return (
    <>
      <div
        className="container d-flex  justify-content-between p-3 border border-black mt-5"
        style={{ width: "100vw" }}
      >
        <h2>Customers</h2>
        <Search setSearch={setSearch}/>
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
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
                <th>
                  <select
                    id="status"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="active">Active</option>
                    <option value="inActive">InActive</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortTableData.map((customer, index) => (
                <tr key={index}>
                  <td>
                    {" "}
                    <input
                      id={customer.id}
                      type="checkbox"
                      onChange={handleSelect}
                    />
                  </td>
                  <td>{customer.id}</td>
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
          <button type="button" onClick={deleteBtn} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

// const newFilteredData = [];
//     const newTable = tableData.map((customer) => {
//       const result = idSelect.includes(customer.id.toString());
//       if (!result) {
//         newFilteredData.push(customer);
//       }
//     });
//     setTableData([newFilteredData])
