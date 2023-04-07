import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import alertReducer from "./reducers/alertReducer";

export default configureStore({
  reducer: {
    products: productReducer,
    alert: alertReducer
  },
  devTools: true,
});