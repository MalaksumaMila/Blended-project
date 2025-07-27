import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constants';

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
  const { data } = await axios(`${ENDPOINTS.CATEGORIES}`);
  return data;
};

export const fetchProducts = async (page = 1, category = '') => {
  const limit = 12;
  const skip = (page - 1) * limit;
  //Отримує товари з пагінацією (limit = 12) та можливістю фільтрації по категорії.
  
  let url = category
    ? `${BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`
    : `${BASE_URL}/products?limit=${limit}&skip=${skip}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error ${res.status}: Failed to fetch products`);
  return res.json(); // Повертає { products: [], total, limit, skip }
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error(`Error ${res.status}: Product not found`);
  return res.json(); // Отримує деталі одного товару за id.
};