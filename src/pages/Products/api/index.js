import axios from "axios";

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

export const searchByCategory=async (category)=>{
  if(category===""){
    return await getAllProducts();
  }
  const url = `https://dummyjson.com/products/category/${category}`
  const res=await axios.get(url);
  return res.data.products;
}

export const deleteProduct=async (id)=>{
  const url = `https://dummyjson.com/products/${id}`;
  await axios.delete(url);
}