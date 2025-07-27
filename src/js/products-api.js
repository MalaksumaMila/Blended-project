import axios from 'axios';
import { BASE_URL, ENDPOINTS, ITEMS_PER_PAGE } from './constants';

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
  const { data } = await axios(`${ENDPOINTS.CATEGORIES}`);
  return data;
};

export const fetchProducts = async (page) => {
    const skip = (page - 1) * ITEMS_PER_PAGE;
    const { data } = await axios.get(`${ENDPOINTS.PRODUCTS}?limit=${ITEMS_PER_PAGE}&skip=${skip}`);
    return data;
    
};