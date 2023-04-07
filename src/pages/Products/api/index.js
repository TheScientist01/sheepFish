import axios from "axios";
import { useDispatch } from "react-redux";

export const getAllProducts = async () => {
  const url = "https://dummyjson.com/products";
  const res = await axios.get(url);
  return res.data.products;
};

export const getCategories = async () => {
  const url = "https://dummyjson.com/products/categories";
  const res = await axios.get(url);
  return res.data;
};

export const searchProducts = async (params) => {
  const url = `https://dummyjson.com/products/search?q=${params.q}`;
  const res = await axios.get(url);
  return res.data;
};

export const searchByCategory = async (category) => {
  if (category === "") {
    return await getAllProducts();
  }
  const url = `https://dummyjson.com/products/category/${category}`;
  const res = await axios.get(url);
  return res.data.products;
};

export const deleteProduct = async (id) => {
  const url = `https://dummyjson.com/products/${id}`;
  await axios.delete(url);
};

export const addProduct = async (data) => {
  const url = "https://dummyjson.com/products/add";
  const res = await axios.post(url, JSON.stringify(data));

  return res.data;
};

export const editProduct = async (data) => {
  const url = `https://dummyjson.com/products/${data.id}`;
  const res = await axios.put(url, JSON.stringify(data));
  return res.data;
};
