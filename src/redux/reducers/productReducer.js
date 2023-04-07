import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { list: [], productToEdit: {}, deleteId: null };

export const productReducer = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
    addAProduct: (state, action) => {
      state.list = state.list?.length
        ? [action.payload, ...state.list]
        : action.payload;
    },
    removeProduct: (state, action) => {
      state.list = state.list.filter(
        (product) => product?.id !== action.payload
      );
    },
    editAProduct: (state, action) => {
      state.list = state.list?.map((product) =>
        product?.id === action.payload.id ? {...action.payload, rating:parseFloat(action.payload.rating)} : product
      );
    },
    setEditProduct: (state, action) => {
      state.productToEdit = action.payload;
    },
    deleteProductId: (state, action) => {
      state.deleteId = action.payload;
    },
  },
});

export const {
  setProducts,
  addAProduct,
  removeProduct,
  editAProduct,
  setEditProduct,
  deleteProductId,
} = productReducer.actions;

export const selectProducts = (state) => state.products.list;
export const selectEditProduct = (state) => state.products.productToEdit;
export const selectDeleteId = (state) => state.products.deleteId;

export default productReducer.reducer;
