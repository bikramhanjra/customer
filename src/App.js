
import { useState, useEffect } from "react";
import "./App.css";
import AddCustomers from "./components/AddCustomers";
import CustomersTable from "./components/CustomersTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [tableData, setTableData] = useState([])

    const handleFormData = (formData) =>{
      // console.log(formData)
       setTableData(prev => [...prev, formData]);
    }

  useEffect(()=>{
    console.log("update", tableData)
  }, [tableData])

 
  return (

    <>
      <Router>
        <Routes>
          <Route path="/AddCustomers" element={<AddCustomers handleForm={handleFormData} />} />
          <Route path="/CustomersTable" element={<CustomersTable tableData={tableData} setTableData={setTableData}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
