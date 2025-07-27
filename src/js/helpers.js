import { refs } from './refs';

export const activeFirstBtn = () => {
  const firstBtn = document.querySelector('.categories__btn');
  if (firstBtn) {
    firstBtn.classList.add('categories__btn--active');
  }
  //   [...refs.categoryList.children].forEach(li => {
  //     const activeBtn = li.firstElementChild;
  //     if (activeBtn.textContent.toLowerCase() === 'all') {
  //       activeBtn.classList.add('categories__btn--active');
  //     }
  //   });
};
