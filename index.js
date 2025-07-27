import"./assets/styles-JE8YjOlG.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";const a={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products")},l=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},_="https://dummyjson.com/",n={CATEGORIES:"products/category-list",PRODUCTS:"products"},e=12;o.defaults.baseURL=_;const g=async()=>{const{data:t}=await o(`${n.CATEGORIES}`);return t},m=async t=>{const s=(t-1)*e,{data:c}=await o.get(`${n.PRODUCTS}?limit=${e}&skip=${s}`);return c},y=t=>{const s=t.map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>`).join("");a.categoryList.innerHTML=s},$=t=>{const s=t.map(({id:c,thumbnail:i,title:r,brand:d,category:p,price:u})=>`
    <li class="products__item" data-id="${c}">
    <img class="products__image" src="${i}" alt="${r}"/>
    <p class="products__title">${r}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${d}</p>
    <p class="products__category">Category: ${p} </p>
    <p class="products__price">Price: $${u}</p>
 </li>
    `).join("");a.productsList.insertAdjacentHTML("beforeend",s)};let b=1;const P=async()=>{try{const t=await g();y(["All",...t]),l()}catch(t){console.log(t)}},S=async()=>{try{const{products:t,total:s}=await m(b);$(t)}catch(t){console.log(t)}};P();S();
//# sourceMappingURL=index.js.map
