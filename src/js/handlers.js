import { activeFirstBtn, highlightActiveCategory, } from './helpers';
import { fetchCategories, fetchProducts, fetchModal,  fetchByCategory  } from './products-api';
import { renderCategories, renderProducts, renderEmptyMessage, renderModal } from './render-function';
import { refs } from './refs.js';
import iziToast from 'izitoast';
import { openModal } from './modal.js';

let currentPage = 1;


export const getCategories = async () => {
  try {
    const data = await fetchCategories();
    
    renderCategories(['All', ...data]);
    activeFirstBtn();
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  }
};
export const getProducts = async () => {
  try {
    const { products, total } = await fetchProducts(currentPage);
    
    renderProducts(products);
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
    
  }
};

export const getModal = async (event) => {
  const card = event.target.closest(".products__item");
  const cardId = card.dataset.id;  
  
  try {
    const data = await fetchModal(cardId);
    openModal();
    renderModal(data);


  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
    
  }
}


//  Клік по категорії ===
export const handleCategoryClick = async (e) => {
  if (!e.target.classList.contains('categories__btn')) return;

  const currentCategory = e.target.textContent;
  console.log(currentCategory);
  
 
  refs.productsList.innerHTML = '';

  try {
    const data = await fetchByCategory(currentCategory);
    renderProducts(data.products);
    highlightActiveCategory(e.target);
  } catch (err) {
    iziToast.error({ title: 'Error', message: err.message });
  }
};





