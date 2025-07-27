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

export const renderProducts = (products, container) => {
  container.innerHTML += products.map(
    (product) => `
      <li class="product-card" data-id="${product.id}">
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price} $</p>
        <!-- <button type=button>Add to cart</button> -->
      </li>
    `
  ).join('');
};

export const renderEmptyMessage = (container, message) => {
  container.innerHTML = `<p class="empty-message">${message}</p>`;
};