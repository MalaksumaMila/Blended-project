import { activeFirstBtn } from './helpers';
import { fetchCategories, fetchProducts, fetchProductById, fetchByCategory  } from './products-api';
import { renderCategories, renderProducts, renderEmptyMessage } from './render-function';
import { refs } from './refs.js';
import iziToast from 'izitoast';

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


//  Клік по категорії ===
export const handleCategoryClick = async (e) => {
  if (!e.target.classList.contains('category-btn')) return;

  const currentCategory = e.target.textContent;
 
  refs.productsList.innerHTML = '';

  try {
    const data = await fetchByCategory(currentCategory);
    renderProducts(data.products);

    // toggleLoadMoreButton(data.products.length);
    // highlightActiveCategory(e.target);
  } catch (err) {
    iziToast.error({ title: 'Error', message: err.message });
  }
};


// 6. Підсвітка активної категорії ===
const highlightActiveCategory = (activeButton) => {
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('categories__btn--active'));
  activeButton.classList.add('categories__btn--active');
};


