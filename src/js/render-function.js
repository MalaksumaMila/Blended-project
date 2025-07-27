import { refs } from './refs';

export const renderCategories = data => {
  //   const allData = ['All', ...data];
  const markup = data
    .map(
      el => `<li class="categories__item">
   <button class="categories__btn" type="button">${el}</button>
 </li>`
    )
    .join('');

  refs.categoryList.innerHTML = markup;
};
