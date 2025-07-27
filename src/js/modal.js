    const modalCloseBtn = document.querySelector(".modal__close-btn");
const modalEl = document.querySelector('.modal');

export const openModal = () => {  
    if (modalEl) {
        modalEl.classList.add('modal--is-open');
    };
};

export const closeModal = () => {
    modalEl.classList.remove('modal--is-open');
}


