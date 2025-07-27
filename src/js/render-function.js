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

export const renderProducts = (products) => {
    const markup = products.map(({ id, thumbnail, title, brand, category, price}) => `
    <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${brand}</p>
    <p class="products__category">Category: ${category} </p>
    <p class="products__price">Price: $${price}</p>
 </li>
    `).join("");

    refs.productsList.insertAdjacentHTML("beforeend", markup);
}

// export const renderModal = () => {
//   const markup =>  
// }