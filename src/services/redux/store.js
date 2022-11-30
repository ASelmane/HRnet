import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./listEmployeeSlice";
import listEmployeeSlice from "./listEmployeeSlice";

export const store = configureStore({
    reducer: {
        employee: employeeSlice,
        listEmployee: listEmployeeSlice
    }
});
