import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./appSlice";

const store = configureStore({
  reducer: { student: studentReducer },
});

export default store;
