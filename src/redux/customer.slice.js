import { createSlice } from '@reduxjs/toolkit'

export const customer = createSlice({
  name: 'customer',
  initialState: {
    tableData: [],
  },
  reducers: {
    setTableData : (state , action) =>{
        state.tableData = action.payload
    },
    

    // const newTable = tableData.filter((customer) => {
    //   return !idSelect.includes(customer.id.toString());
    // });
    // setTableData(newTable);
    // console.log("new table", newTable);

    // setTableData((prev) =>{
    //   return [...prev, {...formData, id:prev.length + 1}]});

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },

  },
})

// Action creators are generated for each case reducer function
export const { setTableData  } = customer.actions

export default customer.reducer