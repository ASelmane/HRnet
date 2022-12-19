import { configureStore } from "@reduxjs/toolkit";
import listEmployeeSlice from "./listEmployeeSlice";

export const store = configureStore({
    reducer: {
        listEmployee: listEmployeeSlice
    }
});
