import"./assets/styles-JE8YjOlG.js";import{a as e,i as p}from"./assets/vendor-CJ_tX8LA.js";const o={categoryList:document.querySelector(".categories"),productsList:document.querySelector("ul.products"),notFoundDiv:document.querySelector(".not-found")},_=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},y=t=>{document.querySelectorAll(".categories__btn").forEach(s=>s.classList.remove("categories__btn--active")),t.classList.add("categories__btn--active")},m="https://dummyjson.com/",r={CATEGORIES:"products/category-list",PRODUCTS:"products",PRODUCTS_BY_CATEGORY:"products/category"},n=12;e.defaults.baseURL=m;const C=async()=>{const{data:t}=await e(`${r.CATEGORIES}`);return t},L=async t=>{const s=(t-1)*n,{data:c}=await e.get(`${r.PRODUCTS}?limit=${n}&skip=${s}`);return c},b=async t=>{const{data:s}=await e(`${r.PRODUCTS_BY_CATEGORY}/${t}`);return s},$=t=>{const s=t.map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>`).join("");o.categoryList.innerHTML=s},i=t=>{const s=t.map(({id:c,thumbnail:d,title:a,brand:l,category:u,price:g})=>`
    <li class="products__item" data-id="${c}">
    <img class="products__image" src="${d}" alt="${a}"/>
    <p class="products__title">${a}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${l}</p>
    <p class="products__category">Category: ${u} </p>
    <p class="products__price">Price: $${g}</p>
 </li>
    `).join("");o.productsList.insertAdjacentHTML("beforeend",s)};let E=1;const S=async()=>{try{const t=await C();$(["All",...t]),_()}catch(t){console.log(t)}},T=async()=>{try{const{products:t,total:s}=await L(E);i(t)}catch(t){console.log(t)}},f=async t=>{if(console.log(t.target),!t.target.classList.contains("categories__btn"))return;const s=t.target.textContent;o.productsList.innerHTML="";try{const c=await b(s);i(c.products),y(t.target)}catch(c){p.error({title:"Error",message:c.message})}};S();T();o.categoryList.addEventListener("click",f);
//# sourceMappingURL=index.js.map
