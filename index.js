import"./assets/styles-JE8YjOlG.js";import{a as r,i as n}from"./assets/vendor-CJ_tX8LA.js";const c={categoryList:document.querySelector(".categories"),productsList:document.querySelector("ul.products"),notFoundDiv:document.querySelector(".not-found"),modalContainer:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn")},y=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},$=t=>{document.querySelectorAll(".categories__btn").forEach(o=>o.classList.remove("categories__btn--active")),t.classList.add("categories__btn--active")},C="https://dummyjson.com/",i={CATEGORIES:"products/category-list",PRODUCTS:"products",PRODUCTS_BY_ID:"products",PRODUCTS_BY_CATEGORY:"products/category"},_=12;r.defaults.baseURL=C;const b=async()=>{const{data:t}=await r(`${i.CATEGORIES}`);return t},L=async t=>{const o=(t-1)*_,{data:s}=await r(`${i.PRODUCTS}?limit=${_}&skip=${o}`);return s},S=async t=>{const{data:o}=await r(`${i.PRODUCTS_BY_CATEGORY}/${t}`);return o},E=async t=>{const{data:o}=await r(`${i.PRODUCTS_BY_ID}/${t}`);return o},h=t=>{const o=t.map(s=>`<li class="categories__item">
   <button class="categories__btn" type="button">${s}</button>
 </li>`).join("");c.categoryList.innerHTML=o},m=t=>{const o=t.map(({id:s,thumbnail:e,title:a,brand:d,category:l,price:u})=>`
    <li class="products__item" data-id="${s}">
    <img class="products__image" src="${e}" alt="${a}"/>
    <p class="products__title">${a}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${d}</p>
    <p class="products__category">Category: ${l} </p>
    <p class="products__price">Price: $${u}</p>
 </li>
    `).join("");c.productsList.insertAdjacentHTML("beforeend",o)},P=t=>{const{thumbnail:o,title:s,tags:e,description:a,shippingInformation:d,returnPolicy:l,price:u}=t,g=`
  <img class="modal-product__img" src="${o}" alt="${s}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${s}</p>
        <ul class="modal-product__tags">${e}</ul>
        <p class="modal-product__description">${a}</p>
        <p class="modal-product__shipping-information">Shipping:${d}</p>
        <p class="modal-product__return-policy">Return Policy:${l}</p>
        <p class="modal-product__price">Price:${u} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
  `;c.modalContainer.innerHTML=g};document.querySelector(".modal__close-btn");const p=document.querySelector(".modal"),T=()=>{p&&p.classList.add("modal--is-open")},f=()=>{p.classList.remove("modal--is-open")};let R=1;const v=async()=>{try{const t=await b();h(["All",...t]),y()}catch(t){n.error({title:"Error",message:t.message})}},B=async()=>{try{const{products:t,total:o}=await L(R);m(t)}catch(t){n.error({title:"Error",message:t.message})}},O=async t=>{const s=t.target.closest(".products__item").dataset.id;try{const e=await E(s);T(),P(e)}catch(e){n.error({title:"Error",message:e.message})}},A=async t=>{if(!t.target.classList.contains("categories__btn"))return;const o=t.target.textContent;console.log(o),c.productsList.innerHTML="";try{const s=await S(o);m(s.products),$(t.target)}catch(s){n.error({title:"Error",message:s.message})}};v();B();c.categoryList.addEventListener("click",A);c.productsList.addEventListener("click",O);c.modalCloseBtn.addEventListener("click",f);
//# sourceMappingURL=index.js.map
