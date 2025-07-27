import { getCategories, getProducts, handleCategoryClick } from './js/handlers';
import { refs } from './js/refs';

//Логіка сторінки Home
getCategories();
getProducts();

refs.categoryList.addEventListener('click', handleCategoryClick);
