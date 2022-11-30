import { createSlice } from "@reduxjs/toolkit"

export const listEmployeeSlice = createSlice({
    name: "listEmployee",
    initialState: {
        listEmployee: []
    },
    reducers : {
        getListEmployee : (state, action) => {
            state.listEmployee = [...state.listEmployee, action.payload]
        },
        updateListEmployee: (state, action) => {
            state.listEmployee = action.payload
        },
        cleanListEmployee : (state) => {
            state.listEmployee = []
        }
    }
})
export const {getListEmployee, updateListEmployee, cleanListEmployee } = listEmployeeSlice.actions
export default listEmployeeSlice.reducer 