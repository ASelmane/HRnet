import { createSlice } from "@reduxjs/toolkit"

export const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        department: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
    },
    reducers : {
        getInfoEmployee : (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.dateOfBirth = action.payload.dateOfBirth
            state.startDate = action.payload.startDate
            state.department = action.payload.department
            state.street = action.payload.street
            state.city = action.payload.city
            state.state = action.payload.state
            state.zipCode = action.payload.zipCode
        },
        updateInfoEmployee: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.dateOfBirth = action.payload.dateOfBirth
            state.startDate = action.payload.startDate
            state.department = action.payload.department
            state.street = action.payload.street
            state.city = action.payload.city
            state.state = action.payload.state
            state.zipCode = action.payload.zipCode
        },
        cleanInfoEmployee : (state) => {
            state.firstName = ""
            state.lastName = ""
            state.dateOfBirth = ""
            state.startDate = ""
            state.department = ""
            state.street = ""
            state.city = ""
            state.state = ""
            state.zipCode = ""
        }
    }
})
export const {getInfoEmployee, updateInfoEmployee, cleanInfoEmployee } = employeeSlice.actions
export default employeeSlice.reducer 