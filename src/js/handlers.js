import { activeFirstBtn } from './helpers';
import { fetchCategories, fetchProducts } from './products-api';
import { renderCategories, renderProducts } from './render-function';

let currentPage = 1;

export const getCategories = async () => {
  try {
    const data = await fetchCategories();
    renderCategories(['All', ...data]);
    activeFirstBtn();
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const { products, total } = await fetchProducts(currentPage);
    renderProducts(products);
  } catch (error) {
    console.log(error);
    
  }
}
