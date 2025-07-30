
import { useState, useEffect } from "react";
import "./App.css";
import AddCustomers from "./components/AddCustomers";
import CustomersTable from "./components/CustomersTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {


  // useEffect(()=>{
  //   console.log("update", tableData)
  // }, [tableData])

 
  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<CustomersTable/>} />
          <Route path="/AddCustomers" element={<AddCustomers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;








// import React from 'react'
// import Todo from './Todo'

// export default function App() {
//   return (
//     <>
//       <Todo/>
//     </>
//   )
// }
