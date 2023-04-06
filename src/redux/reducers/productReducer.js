import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { list: [], deleteId: null };

export const productReducer = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
    addProduct: (state, action) => {
      state.list = state.list?.length
        ? [action.payload, ...state.products]
        : action.payload;
    },
    removeProduct: (state, action) => {
      state.list = state.list.filter(
        (product) => product?.id !== action.payload
      );
    },
    editProduct: (state, action) => {
      state.list = state.list?.map((product) =>
        product?.id !== action.payload.id ? action.payload : product
      );
    },
    deleteProductId: (state, action) => {
      state.deleteId = action.payload;
    },
  },
});

export const {
  setProducts,
  addProduct,
  removeProduct,
  editProduct,
  deleteProductId,
} = productReducer.actions;

export const selectProducts = (state) => state.products.list;
export const selectDeleteId = (state) => state.products.deleteId;

export default productReducer.reducer;
