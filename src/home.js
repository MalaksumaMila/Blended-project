import { getCategories, getModal, getProducts } from './js/handlers';
import { refs } from './js/refs';

//Логіка сторінки Home
getCategories();
getProducts();

refs.productsList.addEventListener("click", getModal);
