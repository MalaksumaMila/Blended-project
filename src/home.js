import { getCategories, getModal, getProducts, handleCategoryClick } from './js/handlers';
import { closeModal } from './js/modal';
import { refs } from './js/refs';

//Логіка сторінки Home
getCategories();
getProducts();

refs.categoryList.addEventListener('click', handleCategoryClick);
refs.productsList.addEventListener("click", getModal);
refs.modalCloseBtn.addEventListener("click", closeModal);
